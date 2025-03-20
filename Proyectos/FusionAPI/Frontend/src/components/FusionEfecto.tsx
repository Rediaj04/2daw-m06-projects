/**
 * @file FusionEfecto.tsx
 * @description Componente que crea una animación visual cuando dos elementos se fusionan.
 *             Genera un efecto de partículas y brillo que varía según el nivel del elemento resultante.
 */

import React, { useEffect } from 'react';
import { TipoElemento } from '../types/tipos';
import '../styles/FusionEffect.css';

// Interfaz que define las propiedades que recibe el componente
interface FusionEffectProps {
    x: number;                // Posición X donde aparecerá el efecto
    y: number;                // Posición Y donde aparecerá el efecto
    onComplete: () => void;   // Callback que se ejecuta cuando termina la animación
    nivel?: TipoElemento;     // Tipo/nivel del elemento resultante de la fusión
}

const FusionEffect: React.FC<FusionEffectProps> = ({ x, y, onComplete, nivel }) => {
    // Effect para controlar la duración de la animación
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 800); // Duración de la animación en milisegundos

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, [onComplete]);

    // Función para obtener el color según el tipo de elemento
    const getColor = (tipo?: TipoElemento): string => {
        switch (tipo) {
            // Colores para la cadena 'a'
            case 'a': return '#3498db'; // Azul
            case 'b': return '#2ecc71'; // Verde
            case 'c': return '#f1c40f'; // Amarillo
            case 'd': return '#e67e22'; // Naranja
            case 'e': return '#e74c3c'; // Rojo

            // Colores para la cadena 'z'
            case 'z': return '#9b59b6'; // Púrpura
            case 'x': return '#8b4513'; // Marrón
            case 'n': return '#2c3e50'; // Negro
            case 'm': return '#ecf0f1'; // Blanco
            case 'k': return '#34495e'; // Gris oscuro
            
            default: return '#f1c40f';  // Color dorado por defecto
        }
    };

    return (
        <div 
            className="fusion-effect"
            style={{
                left: `${x}px`,
                top: `${y}px`
            }}
        >
            {/* Genera 8 partículas en forma de estrella */}
            {[...Array(8)].map((_, i) => (
                <div key={i} className="star-particle" style={{
                    transform: `rotate(${i * 45}deg)`,  // Distribuye las partículas en círculo
                    animationDelay: `${i * 0.05}s`,    // Retraso escalonado en la animación
                    '--particle-color': getColor(nivel) // Color según el nivel
                } as React.CSSProperties}>
                    <div className="star-center"></div>
                </div>
            ))}
            {/* Efecto de brillo central */}
            <div 
                className="glow-effect"
                style={{
                    '--glow-color': getColor(nivel)
                } as React.CSSProperties}
            />
        </div>
    );
};

export default FusionEffect;