export type TipoElemento = 'a' | 'b' | 'c' | 'd' | 'e' | 'z' | 'x' | 'n' | 'm' | 'k';

export interface Elemento {
    tipo: TipoElemento;
    nivel: number;
}

export interface Celda {
    elemento: Elemento | null;
    esGenerador: boolean;
    tipoGenerador?: TipoElemento;
}