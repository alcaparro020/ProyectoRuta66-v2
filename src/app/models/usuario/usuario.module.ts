export class Usuario {

  constructor(dni:string, nombre:string, apellidos:string, edad:number, email:string, telefono:number, contrasenia: string){
      this.dni = dni;
      this.nombre=nombre;
      this.apellidos=apellidos;
      this.edad=edad;
      this.email=email;
      this.telefono=telefono;
      this.contrasenia=contrasenia;
  }

  dni:string="";
  nombre:string="";
  apellidos:string="";
  edad:number=0;
  email:string="";
  telefono:number=0;
  contrasenia:string="";
}