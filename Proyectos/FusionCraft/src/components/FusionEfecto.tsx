import React, { useEffect } from 'react';
import { TipoElemento } from '../types/tipos';
import '../styles/FusionEffect.css';

interface FusionEffectProps {
    x: number;
    y: number;
    onComplete: () => void;
    nivel?: TipoElemento;
}

const FusionEffect: React.FC<FusionEffectProps> = ({ x, y, onComplete, nivel }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 800);

        return () => clearTimeout(timer);
    }, [onComplete]);

    // Función para obtener el color según el tipo
    const getColor = (tipo?: TipoElemento): string => {
        switch (tipo) {
            // Cadena 'a'
            case 'a': return '#3498db'; // 🟦 azul
            case 'b': return '#2ecc71'; // 🟩 verde
            case 'c': return '#f1c40f'; // 🟨 amarillo
            case 'd': return '#e67e22'; // 🟧 naranja
            case 'e': return '#e74c3c'; // 🟥 rojo

            // Cadena 'z'
            case 'z': return '#9b59b6'; // 🟪 púrpura
            case 'x': return '#8b4513'; // 🟫 marrón
            case 'n': return '#2c3e50'; // ⬛ negro
            case 'm': return '#ecf0f1'; // ⬜ blanco
            case 'k': return '#34495e'; // 🔳 gris oscuro
            
            default: return '#f1c40f'; // dorado por defecto
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
            {[...Array(8)].map((_, i) => (
                <div key={i} className="star-particle" style={{
                    transform: `rotate(${i * 45}deg)`,
                    animationDelay: `${i * 0.05}s`,
                    '--particle-color': getColor(nivel)
                } as React.CSSProperties}>
                    <div className="star-center"></div>
                </div>
            ))}
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