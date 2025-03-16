import { useCallback } from 'react';

// Importar todos los sonidos
import generateSound from '../assets/sounds/generate.mp3';
import fusionSound from '../assets/sounds/fusion.mp3';
import maxLevelSound from '../assets/sounds/maxLevel.mp3';
import resetSound from '../assets/sounds/reset.mp3';
import fusionTotalSound from '../assets/sounds/fusionTotal.mp3';

export const useSounds = () => {
    // Crear instancias de Audio para cada sonido
    const sounds = {
        generate: new Audio(generateSound),
        fusion: new Audio(fusionSound),
        maxLevel: new Audio(maxLevelSound),
        reset: new Audio(resetSound),
        fusionTotal: new Audio(fusionTotalSound),
    };

    // Función para reproducir un sonido
    const playSound = useCallback((soundName: keyof typeof sounds) => {
        const sound = sounds[soundName];
        sound.currentTime = 0; // Reiniciar el sonido si ya estaba reproduciéndose
        sound.play().catch(err => console.log('Error reproduciendo sonido:', err));
    }, []);

    return { playSound };
}; 