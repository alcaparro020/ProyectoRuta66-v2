export class RegistroEventoModule { 

  constructor(dni_Usuario: string, id_Evento: string, participante: string, matricual_Coche_Participante: string | null){
    this.dni_Usuario = dni_Usuario;
    this.id_Evento = id_Evento;
    this.participante = participante;
    this.matricula_Coche_Participante = matricual_Coche_Participante;
  }

  dni_Usuario: string = "";
  id_Evento: string = "";
  participante: string = "0";
  matricula_Coche_Participante: string | null = "";
}
