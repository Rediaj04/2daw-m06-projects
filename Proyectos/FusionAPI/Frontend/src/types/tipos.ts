/**
 * @file tipos.ts
 * @description Definición de tipos y interfaces utilizados en el juego.
 *             Contiene las estructuras de datos básicas para elementos,
 *             celdas y tipos de elementos disponibles.
 */

// Tipos de elementos disponibles en el juego
// a-e: cadena básica de elementos
// z-k: cadena especial de elementos
export type TipoElemento = string;

// Estructura de un elemento en el juego
export interface Elemento {
    tipo: TipoElemento;
    nivel: number;
}

// Estructura de una celda en el tablero
export interface Celda {
    elemento: Elemento | null;      // Elemento contenido en la celda
    esGenerador: boolean;           // Indica si la celda es un generador
    tipoGenerador?: TipoElemento;   // Tipo de elemento que genera (si es generador)
}