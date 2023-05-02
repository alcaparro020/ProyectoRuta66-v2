export class Coche { 
  constructor(Dni_Propietario: string, Matricula: string, Marca: string, Modelo: string, Color: string, Modificado: string, Homologado: string) {
    this.Dni_Propietario = Dni_Propietario;
    this.Matricula = Matricula;
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Color = Color;
    this.Modificado = Modificado;
    this.Homologado = Homologado;
  }

  Dni_Propietario: string = "";
  Matricula: string = "";
  Marca: string = "";
  Modelo: string = "";
  Color: string = "";
  Modificado: string = "";
  Homologado: string = "";
}
