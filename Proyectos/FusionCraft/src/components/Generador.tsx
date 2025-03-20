/**
 * @file Generador.tsx
 * @description Componente que representa un generador de elementos en el tablero.
 *             Cada generador produce un tipo específico de elemento cuando se hace clic en él.
 */

import React from 'react';
import { TipoElemento } from '../types/tipos';

// Interfaz que define las propiedades que recibe el componente
interface GeneradorProps {
    tipo: TipoElemento;   // Tipo de elemento que generará
    onClick: () => void;  // Callback que se ejecuta al hacer clic en el generador
}

const Generador: React.FC<GeneradorProps> = ({ tipo, onClick }) => {
    // Función que convierte el tipo de elemento en su emoji correspondiente
    const getEmoji = (tipo: TipoElemento): string => {
        switch (tipo) {
            // Emojis para la cadena de elementos básicos
            case 'a':
                return '🟦';  // Elemento básico azul
            case 'b':
                return '🟩';  // Elemento básico verde
            case 'c':
                return '🟨';  // Elemento básico amarillo
            case 'd':
                return '🟧';  // Elemento básico naranja
            case 'e':
                return '🟥';  // Elemento básico rojo

            // Emojis para la cadena de elementos especiales
            case 'z':
                return '🟪';  // Elemento especial púrpura
            case 'x':
                return '🟫';  // Elemento especial marrón
            case 'n':
                return '⬛';  // Elemento especial negro
            case 'm':
                return '⬜';  // Elemento especial blanco
            case 'k':
                return '🔳';  // Elemento especial gris

            default:
                return '❓';  // Emoji por defecto para tipos desconocidos
        }
    };

    return (
        <div className="generador" onClick={onClick}>
            {/* Muestra el emoji correspondiente al tipo de elemento que genera */}
            <div className="generador-icono">{getEmoji(tipo)}</div>
        </div>
    );
};

export default Generador;