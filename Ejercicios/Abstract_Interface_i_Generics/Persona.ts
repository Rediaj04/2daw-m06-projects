export default abstract class Persona {
  public nom: string;
  public cognoms: string;
  private _dni: string;

  constructor(nom: string, cognoms: string, dni: string) {
      this.nom = nom;
      this.cognoms = cognoms;
      this._dni = dni;
  }

  get getDni(): string {
      return this._dni;
  }

  set setDni(dni: string) {
      this._dni = dni;
  }
  public abstract mostrarInformacio(): void;
}
