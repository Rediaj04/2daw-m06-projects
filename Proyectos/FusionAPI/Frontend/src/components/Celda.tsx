/**
 * @file Celda.tsx
 * @description Componente que representa una celda individual del tablero de juego.
 *             Maneja la lógica de drop para elementos arrastrables y la visualización
 *             de generadores y elementos.
 */

import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Elemento, TipoElemento } from '../types/tipos';
import Generador from './Generador';
import ElementoArrastrable from './ElementoArrastrable';

// Interfaz que define las propiedades que recibe el componente
interface CeldaProps {
    celda: {
        elemento: Elemento | null;      // Elemento actual en la celda
        esGenerador: boolean;           // Indica si la celda es un generador
        tipoGenerador?: TipoElemento;   // Tipo de elemento que genera (si es generador)
    };
    onDrop: (elemento: Elemento, filaDestino: number, columnaDestino: number, filaOrigen: number, columnaOrigen: number) => void;
    onClick: () => void;                // Manejador de clicks en la celda
    fila: number;                       // Posición de fila en el tablero
    columna: number;                    // Posición de columna en el tablero
}

const Celda: React.FC<CeldaProps> = ({ celda, onDrop, onClick, fila, columna }) => {
    // Referencia al elemento DOM de la celda
    const ref = useRef<HTMLDivElement>(null);

    // Hook de react-dnd para manejar el drop de elementos
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'BLOQUE',              // Tipo de elemento que puede recibir
        drop: (item: Elemento & { fila: number; columna: number }) => {
            // Ejecuta el callback de drop con la información necesaria
            onDrop(item, fila, columna, item.fila, item.columna);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),   // Estado que indica si hay un elemento sobre la celda
        }),
    }));

    // Conecta la referencia con el hook de drop
    drop(ref);

    return (
        <div
            ref={ref}
            onClick={onClick}
            className={`celda ${isOver ? 'sobre' : ''} ${celda.esGenerador ? 'generador' : ''}`}
            data-fila={fila}
            data-columna={columna}
        >
            {/* Renderiza un generador o un elemento según el tipo de celda */}
            {celda.esGenerador ? (
                <Generador
                    tipo={celda.tipoGenerador || 'a'} 
                    onClick={onClick}
                />
            ) : celda.elemento ? (
                <ElementoArrastrable elemento={celda.elemento} fila={fila} columna={columna} />
            ) : null}
        </div>
    );
};

export default Celda;