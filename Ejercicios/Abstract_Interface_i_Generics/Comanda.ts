import { Identificable } from './Interface.js'


//Definció comanda
export default class Comanda implements Identificable {

    public plats: string
    private _id: number
    tipo: string;
    private static _nextId: number = 1;

    constructor(plats: string) {
      this.plats = plats;
      this._id = Comanda._nextId++;
      this.tipo = "";
    }

    set setId(id: number) {
      this._id = id;
    }

    getId(): string {
        return this._id.toString();
    }
  }