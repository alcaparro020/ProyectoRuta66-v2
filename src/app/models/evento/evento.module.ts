export class Evento {
  constructor(Dni_Usuario_Creacion: string, Ubicacion: string, Fecha: Date, Hora: string, Descripcion: string, 
    Permite_Modificados: string, Permite_Sin_Homologar: string, Numero_Plazas: number, Imagenes: string) {
      this.Dni_Usuario_Creacion = Dni_Usuario_Creacion;
      this.Ubicacion = Ubicacion;
      this.Fecha = Fecha;
      this.Hora = Hora;
      this.Descripcion = Descripcion;
      this.Permite_Modificados = Permite_Modificados;
      this.Permite_Sin_Homologar = Permite_Sin_Homologar;
      this.Numero_Plazas = Numero_Plazas;
      this.Imagenes = Imagenes;
  }

  Dni_Usuario_Creacion: string = "";
  Ubicacion: string = "";
  Fecha: Date = new Date();
  Hora: string = "";
  Descripcion: string = "";
  Permite_Modificados: string = "0";
  Permite_Sin_Homologar: string = "0";
  Numero_Plazas: number = 0;
  Imagenes: string;

}
