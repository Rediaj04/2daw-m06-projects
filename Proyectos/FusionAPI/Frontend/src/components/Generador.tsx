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
    // Simplificamos para solo mostrar los emojis iniciales
    const getEmoji = (tipo: TipoElemento): string => {
        return tipo === 'a' ? '🔥' : '💧'; // Solo fuego y agua como elementos base
    };

    return (
        <div className="generador" onClick={onClick}>
            <div className="generador-icono">{getEmoji(tipo)}</div>
        </div>
    );
};

export default Generador;