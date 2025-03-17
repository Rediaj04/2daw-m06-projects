import React, { useState } from 'react';
import Celda from './Celda';
import { TipoElemento, Elemento, Celda as CeldaTipo } from '../types/tipos';
import { useSounds } from '../hooks/useSounds';

const Tablero: React.FC = () => {
    // Añadimos un ID de juego para forzar el reinicio completo
    const [gameId, setGameId] = useState(0);
    
    const crearTableroInicial = () => {
        const tableroInicial = Array(7).fill(null).map(() =>
            Array(7).fill(null).map(() => ({
                elemento: null,
                esGenerador: false,
                tipoGenerador: undefined,
            } as CeldaTipo))
        );

        // Colocar generadores en posiciones específicas
        tableroInicial[0][0] = { 
            elemento: null, 
            esGenerador: true, 
            tipoGenerador: 'a' 
        };
        tableroInicial[0][6] = { 
            elemento: null, 
            esGenerador: true, 
            tipoGenerador: 'z' 
        };

        return tableroInicial;
    };

    // Inicializar el tablero usando la función
    const [tablero, setTablero] = useState(() => crearTableroInicial());

    const [error, setError] = useState<string | null>(null);
    const { playSound } = useSounds();

    // Añadimos una referencia para controlar si el tablero está en estado inicial
    const [isNewGame, setIsNewGame] = useState(true);

    const encontrarCeldaVaciaAleatoria = (): { fila: number; columna: number } | null => {
        // Crear un array de todas las celdas vacías disponibles
        const celdasVacias: { fila: number; columna: number }[] = [];

        for (let fila = 0; fila < tablero.length; fila++) {
            for (let columna = 0; columna < tablero[fila].length; columna++) {
                // Excluir las celdas de los generadores (0,0) y (0,6)
                if (!tablero[fila][columna].elemento && 
                    !((fila === 0 && columna === 0) || (fila === 0 && columna === 6))) {
                    celdasVacias.push({ fila, columna });
                }
            }
        }

        if (celdasVacias.length === 0) {
        return null;
        }

        // Seleccionar una celda vacía aleatoria
        const indiceAleatorio = Math.floor(Math.random() * celdasVacias.length);
        return celdasVacias[indiceAleatorio];
    };

    const obtenerSiguienteNivel = (tipo: TipoElemento): TipoElemento | null => {
        const fusiones: Record<TipoElemento, TipoElemento> = {
            // Cadena de fusión para 'a'
            a: 'b',
            b: 'c',
            c: 'd',
            d: 'e',
            e: 'e', // No se puede fusionar más

            // Cadena de fusión para 'z'
            z: 'x',
            x: 'n',
            n: 'm',
            m: 'k',
            k: 'k', // No se puede fusionar más
        };
        return fusiones[tipo] || null;
    };

    const manejarFusion = (filaDestino: number, columnaDestino: number, elemento: Elemento, filaOrigen: number, columnaOrigen: number) => {
        // Si es la primera acción después de un reinicio, asegurarse de que estamos trabajando con el tablero limpio
        if (isNewGame) {
            setIsNewGame(false);
        }

        // Verificar si está intentando soltar en la misma posición
        if (filaOrigen === filaDestino && columnaOrigen === columnaDestino) {
            setError('No puedes soltar un bloque en su misma posición');
            return;
        }

        // Verificar si la celda destino es un generador
        if (tablero[filaDestino][columnaDestino].esGenerador) {
            setError('No puedes mover bloques a las celdas generadoras');
            return;
        }

        const elementoOrigen = tablero[filaOrigen][columnaOrigen].elemento;
        const elementoDestino = tablero[filaDestino][columnaDestino].elemento;
        const elementoReal = elementoOrigen || elemento;

        // Si no hay elemento en el destino, simplemente mover
        if (!elementoDestino) {
            const nuevoTablero = [...tablero];
            nuevoTablero[filaOrigen][columnaOrigen].elemento = null;
            nuevoTablero[filaDestino][columnaDestino].elemento = {
                ...elementoReal
            };
            setTablero(nuevoTablero);
            setError(null);
            return;
        }

        // Verificar si los elementos son del mismo tipo
        if (elementoReal.tipo === elementoDestino.tipo) {
            // Verificar si ya está en nivel máximo
            if (elementoReal.tipo === 'e' || elementoReal.tipo === 'k') {
                setError(`No se pueden fusionar bloques de nivel máximo (${elementoReal.tipo})`);
                return;
            }

            const siguienteNivel = obtenerSiguienteNivel(elementoReal.tipo);
            
            if (siguienteNivel) {
                const nuevoTablero = [...tablero];
                nuevoTablero[filaOrigen][columnaOrigen].elemento = null;
                nuevoTablero[filaDestino][columnaDestino].elemento = {
                    tipo: siguienteNivel,
                    nivel: 1
                };
                
                setTablero(nuevoTablero);
                
                // Mostrar mensaje si es nivel máximo
                if (siguienteNivel === 'e' || siguienteNivel === 'k') {
                    setError(`¡Has alcanzado el nivel máximo! (${siguienteNivel})`);
                    playSound('maxLevel');
                } else {
                    setError(null);
                    playSound('fusion');
                }
            }
        } else {
            setError(`Solo puedes fusionar elementos del mismo tipo (${elementoReal.tipo} ≠ ${elementoDestino.tipo})`);
        }
    };

    const manejarGeneracion = (tipoGenerador: TipoElemento) => {
        const celdaVacia = encontrarCeldaVaciaAleatoria();
        if (!celdaVacia) {
            setError('¡Tablero lleno! Fusiona algunos bloques para liberar espacio');
            return;
        }

        const nuevoTablero = [...tablero];
        nuevoTablero[celdaVacia.fila][celdaVacia.columna].elemento = {
            tipo: tipoGenerador,
            nivel: 1
        };
        setTablero(nuevoTablero);
        setError(null);
        playSound('generate'); // Reproducir sonido de generación
    };

    const reiniciarTablero = () => {
        // Incrementar el gameId para forzar un re-render completo
        setGameId(prevId => prevId + 1);
        // Crear un nuevo tablero inicial
        setTablero(crearTableroInicial());
        setError(null);
        playSound('reset');
    };

    const fusionTotal = () => {
        let seRealizoFusion = false;

        // Función para encontrar parejas del mismo tipo
        const encontrarParejas = () => {
            const parejas: { tipo: TipoElemento, posiciones: Array<{fila: number, columna: number}> }[] = [];
            const posicionesPorTipo = new Map<TipoElemento, Array<{fila: number, columna: number}>>();

            // Recorrer el tablero y agrupar elementos por tipo
            for (let fila = 0; fila < tablero.length; fila++) {
                for (let columna = 0; columna < tablero[fila].length; columna++) {
                    const elemento = tablero[fila][columna].elemento;
                    // Excluir elementos de nivel máximo y generadores
                    if (elemento && 
                        !tablero[fila][columna].esGenerador && 
                        elemento.tipo !== 'e' && 
                        elemento.tipo !== 'k') {
                        if (!posicionesPorTipo.has(elemento.tipo)) {
                            posicionesPorTipo.set(elemento.tipo, []);
                        }
                        posicionesPorTipo.get(elemento.tipo)?.push({ fila, columna });
                    }
                }
            }

            // Encontrar tipos que tienen al menos 2 elementos
            posicionesPorTipo.forEach((posiciones, tipo) => {
                if (posiciones.length >= 2) {
                    parejas.push({ tipo, posiciones });
                }
            });

            return parejas;
        };

        const realizarFusiones = () => {
            const parejas = encontrarParejas();
            
            // Realizar fusiones usando manejarFusion
            parejas.forEach(({ tipo, posiciones }) => {
                while (posiciones.length >= 2) {
                    // Tomar dos posiciones aleatorias
                    const indice1 = Math.floor(Math.random() * posiciones.length);
                    const pos1 = posiciones[indice1];
                    posiciones.splice(indice1, 1);

                    const indice2 = Math.floor(Math.random() * posiciones.length);
                    const pos2 = posiciones[indice2];
                    posiciones.splice(indice2, 1);

                    // Usar el elemento existente en el tablero
                    const elementoOrigen = tablero[pos1.fila][pos1.columna].elemento;
                    
                    if (elementoOrigen) {
                        // Usar manejarFusion para mantener la consistencia
                        manejarFusion(
                            pos2.fila,
                            pos2.columna,
                            elementoOrigen,
                            pos1.fila,
                            pos1.columna
                        );
                        seRealizoFusion = true;
                    }
                }
            });

            // Si se realizaron fusiones, intentar más fusiones
            if (seRealizoFusion) {
                // Pequeña pausa para permitir que el estado se actualice
                setTimeout(() => {
                    const masParejasDisponibles = encontrarParejas().length > 0;
                    if (masParejasDisponibles) {
                        realizarFusiones();
                    }
                }, 100);
            }
        };

        // Iniciar el proceso de fusiones
        realizarFusiones();

        if (!seRealizoFusion) {
            setError("No se encontraron parejas válidas para fusionar");
        }
    };

    return (
        <div className="tablero-container">
            {error && <div className="error-mensaje">{error}</div>}
            <div key={gameId} className="tablero">
                {tablero.map((fila, filaIndex) => (
                    <div key={`${gameId}-${filaIndex}`} className="fila">
                        {fila.map((celda, columnaIndex) => (
                            <Celda
                                key={`${gameId}-${filaIndex}-${columnaIndex}`}
                                celda={celda}
                                onDrop={(elemento, filaDestino, columnaDestino, filaOrigen, columnaOrigen) =>
                                    manejarFusion(filaDestino, columnaDestino, elemento, filaOrigen, columnaOrigen)
                                }
                                onClick={() => {
                                    if (celda.esGenerador && celda.tipoGenerador) {
                                        manejarGeneracion(celda.tipoGenerador);
                                    }
                                }}
                                fila={filaIndex}
                                columna={columnaIndex}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className="botones-container">
                <button className="boton-reiniciar-juego" onClick={reiniciarTablero}>
                    Reiniciar Juego
                </button>
                <button className="boton-fusion-total" onClick={fusionTotal}>
                    Fusión Total
                </button>
            </div>
        </div>
    );
};

export default Tablero;