/**
 * @file Tablero.tsx
 * @description Componente principal del juego que gestiona el tablero de juego.
 *             Maneja la lógica de fusiones, generación de elementos y el estado general del juego.
 * 
 * Funcionalidades principales:
 * - crearTableroInicial: Inicializa el tablero con los generadores
 * - encontrarCeldaVaciaAleatoria: Busca espacios disponibles para nuevos elementos
 * - obtenerSiguienteNivel: Determina el siguiente nivel en la cadena de fusiones
 * - manejarFusion: Controla la lógica de fusión entre elementos
 * - manejarGeneracion: Crea nuevos elementos en el tablero
 * - reiniciarTablero: Vuelve el tablero a su estado inicial
 * - fusionTotal: Realiza todas las fusiones posibles automáticamente
 */

import React, { useState } from 'react';
import Celda from './Celda';
import { TipoElemento, Elemento, Celda as CeldaTipo } from '../types/tipos';
import { useSounds } from '../hooks/useSounds';
import FusionEffect from './FusionEfecto'; 

const Tablero: React.FC = () => {
    const [gameId, setGameId] = useState(0);
    
    const crearTableroInicial = () => {
        const tableroInicial = Array(15).fill(null).map(() =>
            Array(15).fill(null).map(() => ({
                elemento: null,
                esGenerador: false,
                tipoGenerador: undefined,
            } as CeldaTipo))
        );

        // Mantener los generadores en las esquinas superiores
        tableroInicial[0][0] = { 
            elemento: null, 
            esGenerador: true, 
            tipoGenerador: 'a' 
        };
        tableroInicial[0][14] = { // Cambiado de 19 a 14 para la última columna
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

    // Estado para el efecto de fusión
    const [fusionEffect, setFusionEffect] = useState<{x: number; y: number; nivel: TipoElemento} | null>(null);

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

    const obtenerSiguienteElemento = async (emoji: string): Promise<string | null> => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/emojis?emoji=${encodeURIComponent(emoji)}`);
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            const nuevoEmoji = await response.text();
            return nuevoEmoji;
        } catch (error) {
            console.error('Error al obtener el siguiente elemento:', error);
            return null;
        }
    };

    const manejarFusion = async (filaDestino: number, columnaDestino: number, elemento: Elemento, filaOrigen: number, columnaOrigen: number) => {
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

        const celdaDestino = tablero[filaDestino][columnaDestino];
        const elementoOrigen = tablero[filaOrigen][columnaOrigen].elemento;
        const elementoReal = elementoOrigen || elemento;

        if (celdaDestino.elemento) {
            // Verificar si los emojis son iguales
            console.log('Comparando:', {
                destino: celdaDestino.elemento.tipo,
                origen: elementoReal.tipo
            });
            
            if (celdaDestino.elemento.tipo === elementoReal.tipo) {
                console.log('Emojis iguales, pidiendo siguiente a la API');
                // Usar el emoji actual para pedir el siguiente
                const siguienteEmoji = await obtenerSiguienteElemento(elementoReal.tipo);
                
                console.log('API devolvió:', siguienteEmoji);
                
                if (siguienteEmoji) {
                    const nuevoElemento: Elemento = {
                        tipo: siguienteEmoji,
                        nivel: 1
                    };

                    const nuevoTablero = [...tablero];
                    nuevoTablero[filaDestino][columnaDestino].elemento = nuevoElemento;
                    nuevoTablero[filaOrigen][columnaOrigen].elemento = null;
                    setTablero(nuevoTablero);

                    playSound('fusion');
                    setFusionEffect({
                        x: columnaDestino * 30 + 15,
                        y: filaDestino * 30 + 15,
                        nivel: siguienteEmoji as TipoElemento
                    });
                }
            } else {
                console.log('Los emojis no son iguales, no se puede fusionar');
                setError('No se pueden fusionar elementos diferentes');
            }
        } else {
            const nuevoTablero = [...tablero];
            nuevoTablero[filaOrigen][columnaOrigen].elemento = null;
            nuevoTablero[filaDestino][columnaDestino].elemento = {
                ...elementoReal
            };
            setTablero(nuevoTablero);
            setError(null);
        }
    };

    const manejarGeneracion = (tipoGenerador: TipoElemento) => {
        const nuevoElemento: Elemento = {
            tipo: tipoGenerador === 'a' ? '🔥' : '💧',
            nivel: 1
        };
        
        const celdaVacia = encontrarCeldaVaciaAleatoria();
        if (!celdaVacia) {
            setError('¡Tablero lleno! Fusiona algunos bloques para liberar espacio');
            return;
        }

        const nuevoTablero = [...tablero];
        nuevoTablero[celdaVacia.fila][celdaVacia.columna].elemento = nuevoElemento;
        setTablero(nuevoTablero);
        setError(null);
        playSound('generate');
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
                        if (!posicionesPorTipo.has(elemento.tipo as TipoElemento)) {
                            posicionesPorTipo.set(elemento.tipo as TipoElemento, []);
                        }
                        posicionesPorTipo.get(elemento.tipo as TipoElemento)?.push({ fila, columna });
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

        const realizarFusiones = async () => {
            const parejas = encontrarParejas();
            
            // Realizar fusiones usando manejarFusion
            for (const { posiciones } of parejas) {
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
                        await manejarFusion(
                            pos2.fila,
                            pos2.columna,
                            elementoOrigen,
                            pos1.fila,
                            pos1.columna
                        );
                        seRealizoFusion = true;
                    }
                }
            }

            // Si se realizaron fusiones, intentar más fusiones después de una pequeña pausa
            if (seRealizoFusion) {
                setTimeout(() => {
                    const masParejasDisponibles = encontrarParejas().length > 0;
                    if (masParejasDisponibles) {
                        realizarFusiones();
                    }
                }, 300); // Aumentado el tiempo para dar más tiempo a las animaciones
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
                                data-fila={filaIndex}
                                data-columna={columnaIndex}
                            />
                        ))}
                    </div>
                ))}
            </div>
            {fusionEffect && (
                <FusionEffect
                    x={fusionEffect.x}
                    y={fusionEffect.y}
                    nivel={fusionEffect.nivel}
                    onComplete={() => setFusionEffect(null)}
                />
            )}
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