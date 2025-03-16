import React from 'react';
import { TipoElemento } from '../types/tipos';

interface GeneradorProps {
    tipo: TipoElemento;
    onClick: () => void;
}

const Generador: React.FC<GeneradorProps> = ({ tipo, onClick }) => {
    const getEmoji = (tipo: TipoElemento): string => {
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
        <div className="generador" onClick={onClick}>
            <div className="generador-icono">{getEmoji(tipo)}</div>
        </div>
    );
};

export default Generador;