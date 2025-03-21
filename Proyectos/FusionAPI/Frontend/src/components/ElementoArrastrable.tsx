/**
 * @file ElementoArrastrable.tsx
 * @description Componente que representa un elemento que puede ser arrastrado en el tablero.
 *             Implementa la funcionalidad de drag and drop y maneja la visualización
 *             de los diferentes tipos de elementos mediante emojis.
 */

import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { Elemento } from '../types/tipos';

// Interfaz que define las propiedades que recibe el componente
interface ElementoArrastrableProps {
    elemento: Elemento;    // Información del elemento (tipo, nivel, etc)
    fila: number;         // Posición de fila actual del elemento
    columna: number;      // Posición de columna actual del elemento
}

const ElementoArrastrable: React.FC<ElementoArrastrableProps> = ({ elemento, fila, columna }) => {
    // Referencia al elemento DOM
    const ref = useRef<HTMLDivElement>(null);

    // Hook de react-dnd para manejar el drag del elemento
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'BLOQUE',   // Tipo de elemento arrastrable
        item: { ...elemento, fila, columna },  // Datos que se pasan durante el arrastre
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),  // Estado que indica si el elemento está siendo arrastrado
        }),
    }));

    // Conecta la referencia con el hook de drag
    drag(ref);

    return (
        <div
            ref={ref}
            className={`elemento-arrastrable ${isDragging ? 'arrastrando' : ''}`}
        >
            <div className="elemento-icono">{elemento.tipo}</div>
        </div>
    );
};

export default ElementoArrastrable;