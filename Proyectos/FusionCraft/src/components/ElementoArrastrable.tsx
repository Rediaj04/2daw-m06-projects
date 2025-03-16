import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { Elemento } from '../types/tipos';

interface ElementoArrastrableProps {
    elemento: Elemento;
    fila: number;
    columna: number;
}

const ElementoArrastrable: React.FC<ElementoArrastrableProps> = ({ elemento, fila, columna }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'BLOQUE',
        item: { ...elemento, fila, columna }, // Incluir la posición de origen
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    drag(ref);

    const getEmoji = (tipo: string): string => {
        switch (tipo) {
            // Emojis para la cadena de 'a'
            case 'a':
                return '🟦';
            case 'b':
                return '🟩';
            case 'c':
                return '🟨';
            case 'd':
                return '🟧';
            case 'e':
                return '🟥';

            // Emojis para la cadena de 'z'
            case 'z':
                return '🟪';
            case 'x':
                return '🟫';
            case 'n':
                return '⬛';
            case 'm':
                return '⬜';
            case 'k':
                return '🔳';

            default:
                return '❓';
        }
    };

    return (
        <div
            ref={ref}
            className={`elemento-arrastrable ${isDragging ? 'arrastrando' : ''}`}
        >
            <div className="elemento-icono">{getEmoji(elemento.tipo)}</div>
        </div>
    );
};

export default ElementoArrastrable;