/**
 * @file tipos.ts
 * @description Definición de tipos y interfaces utilizados en el juego.
 *             Contiene las estructuras de datos básicas para elementos,
 *             celdas y tipos de elementos disponibles.
 */

// Tipos de elementos disponibles en el juego
// a-e: cadena básica de elementos
// z-k: cadena especial de elementos
export type TipoElemento = 'a' | 'b' | 'c' | 'd' | 'e' | 'z' | 'x' | 'n' | 'm' | 'k';

// Estructura de un elemento en el juego
export interface Elemento {
    tipo: TipoElemento;    // Tipo del elemento (a-e o z-k)
    nivel: number;         // Nivel actual del elemento
}

// Estructura de una celda en el tablero
export interface Celda {
    elemento: Elemento | null;      // Elemento contenido en la celda
    esGenerador: boolean;           // Indica si la celda es un generador
    tipoGenerador?: TipoElemento;   // Tipo de elemento que genera (si es generador)
}