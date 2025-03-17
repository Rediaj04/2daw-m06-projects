import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Elemento, TipoElemento } from '../types/tipos';
import Generador from './Generador';
import ElementoArrastrable from './ElementoArrastrable';

interface CeldaProps {
    celda: {
        elemento: Elemento | null;
        esGenerador: boolean;
        tipoGenerador?: TipoElemento;
    };
    onDrop: (elemento: Elemento, filaDestino: number, columnaDestino: number, filaOrigen: number, columnaOrigen: number) => void;
    onClick: () => void;
    fila: number;
    columna: number;
}

const Celda: React.FC<CeldaProps> = ({ celda, onDrop, onClick, fila, columna }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'BLOQUE',
        drop: (item: Elemento & { fila: number; columna: number }) => {
            onDrop(item, fila, columna, item.fila, item.columna);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    drop(ref);

    return (
        <div
            ref={ref}
            onClick={onClick}
            className={`celda ${isOver ? 'sobre' : ''} ${celda.esGenerador ? 'generador' : ''}`}
        >
            {celda.esGenerador ? (
                <Generador
                    tipo={celda.tipoGenerador || 'a'} 
                    onClick={onClick}
                />
            ) : celda.elemento ? (
                <ElementoArrastrable elemento={celda.elemento} fila={fila} columna={columna} />
            ) : null}
        </div>
    );
};

export default Celda;