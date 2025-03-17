import React, { useEffect } from 'react';
import { TipoElemento } from '../types/tipos';
import '../styles/FusionEffect.css';

interface FusionEffectProps {
    x: number;
    y: number;
    onComplete: () => void;
    nivel?: TipoElemento; // Añadimos nivel como prop opcional
}

const FusionEffect: React.FC<FusionEffectProps> = ({ x, y, onComplete, nivel }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 800);

        return () => clearTimeout(timer);
    }, [onComplete]);

    // Determinamos la clase según el nivel
    const getNivelClass = () => {
        if (nivel === 'e' || nivel === 'k') return 'nivel-maximo';
        if (nivel === 'd' || nivel === 'n') return 'nivel-alto';
        return '';
    };

    return (
        <div 
            className={`fusion-effect ${getNivelClass()}`}
            style={{
                left: `${x}px`,
                top: `${y}px`
            }}
        >
            {[...Array(12)].map((_, i) => (
                <div key={i} className="star-particle" style={{
                    transform: `rotate(${i * 30}deg)`,
                    animationDelay: `${i * 0.05}s`
                }}>
                    <div className="star-center"></div>
                </div>
            ))}
            <div className="glow-effect"></div>
        </div>
    );
};

export default FusionEffect;