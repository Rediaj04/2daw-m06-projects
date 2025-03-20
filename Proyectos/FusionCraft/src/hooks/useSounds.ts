/**
 * @file useSounds.ts
 * @description Hook personalizado para manejar los efectos de sonido del juego.
 *             Proporciona una interfaz simple para reproducir diferentes sonidos
 *             en respuesta a las acciones del juego.
 * 
 * Sonidos disponibles:
 * - generate: Al crear un nuevo elemento
 * - fusion: Al fusionar dos elementos
 * - maxLevel: Al intentar fusionar elementos de nivel máximo
 * - reset: Al reiniciar el tablero
 * - fusionTotal: Al realizar fusión automática de todos los elementos
 */

import { useCallback } from 'react';

// Importación de archivos de audio
import generateSound from '../assets/sounds/generate.mp3';
import fusionSound from '../assets/sounds/fusion.mp3';
import maxLevelSound from '../assets/sounds/maxLevel.mp3';
import resetSound from '../assets/sounds/reset.mp3';
import fusionTotalSound from '../assets/sounds/fusionTotal.mp3';

export const useSounds = () => {
    const playSound = useCallback((soundName: keyof typeof sounds) => {
        // Movemos la inicialización aquí dentro
        const sounds = {
            generate: new Audio(generateSound),
            fusion: new Audio(fusionSound),
            maxLevel: new Audio(maxLevelSound),
            reset: new Audio(resetSound),
            fusionTotal: new Audio(fusionTotalSound),
        };
        
        const sound = sounds[soundName];
        sound.currentTime = 0;
        sound.play().catch(err => console.log('Error reproduciendo sonido:', err));
    }, []); // No necesitamos dependencias ahora

    return { playSound };
}; 