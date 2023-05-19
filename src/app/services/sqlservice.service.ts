import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario/usuario.module';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { Coche } from '../models/coche/coche.module';
import { RegistroEventoModule } from '../models/registro-evento/registro-evento.module';
import { Evento } from '../models/evento/evento.module';
import { Eventomodificado } from '../interfaces/eventomodificado';

@Injectable({
  providedIn: 'root'
})
export class SQLserviceService {

  baseUrl = "http://alvarogomezpracticas.es:9000/";

  constructor(private http: HttpClient, private cookies: CookieService) { }

  addUser(usuario: Usuario) {
    return this.http.post(`${this.baseUrl}post.php`, JSON.stringify(usuario));
  }

  getUserDni(dni: string) {
    const optUser = { Dni: dni }
    return this.http.post(`${this.baseUrl}getUserDni.php`, JSON.stringify(optUser));
  }

  modifyUserDni(usuario: Usuario) {
    return this.http.post(`${this.baseUrl}modifyUserDni.php`, JSON.stringify(usuario));
  }

  darseBaja(dni: string, IdEvento: string) {
    const algo4 = { dni: dni, Id: IdEvento };
    return this.http.post(`${this.baseUrl}darseBaja.php`, JSON.stringify(algo4));
  }

  addCoche(coche: Coche) {
    return this.http.post(`${this.baseUrl}addCoche.php`, JSON.stringify(coche));
  }

  modifyCoche(coche: Coche) {
    return this.http.post(`${this.baseUrl}modifyCoche.php`, JSON.stringify(coche));
  }

  BorrarCoche(matricula: string) {
    const algo4 = { matriculaBorrar: matricula };
    return this.http.post(`${this.baseUrl}borrarCoche.php`, JSON.stringify(algo4));
  }

  getCoches(dni: string): Observable<any> {
    const algo2 = { dniUser: dni };
    return this.http.post(`${this.baseUrl}getCoches.php`, JSON.stringify(algo2));
  }

  getCoche(matricula: string) {
    const algo3 = { matriculaCoche: matricula }
    return this.http.post(`${this.baseUrl}getCoche.php`, JSON.stringify(algo3));
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}loginUser.php`, JSON.stringify(user));
  }

  guardarImagen(imagen: any) {
    return this.http.post(`${this.baseUrl}guardarImagen.php`, JSON.stringify(imagen));
  }

  newEvento(evento: any) {
    return this.http.post(`${this.baseUrl}newEvento.php`, JSON.stringify(evento));
  }

  getEventos() {
    return this.http.post(`${this.baseUrl}getEventos.php`, JSON.stringify("evento"));
  }

  getEventosFiltros(objFiltro: any){
    return this.http.post(`${this.baseUrl}getEventosFiltros.php`, JSON.stringify(objFiltro));
  }

  getEventosDni(dni: string) {
    const optEvento = { dni: dni }
    return this.http.post(`${this.baseUrl}getEventosDni.php`, JSON.stringify(optEvento));
  }

  getEvento(id: string) {
    const optEvento = { Id: id }
    return this.http.post(`${this.baseUrl}getEvento.php`, JSON.stringify(optEvento));
  }

  modificarEvento(evento: Eventomodificado) {
    return this.http.post(`${this.baseUrl}modificarEvento.php`, JSON.stringify(evento));
  }

  cancelarEvento(id: string) {
    const optEvento = { Id: id }
    return this.http.post(`${this.baseUrl}cancelarEvento.php`, JSON.stringify(optEvento));
  }

  getImagenesEventos(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}getImagenes.php`)
  }

  newRegistro(registro: RegistroEventoModule) {
    return this.http.post(`${this.baseUrl}newRegistro.php`, JSON.stringify(registro));
  }

  getRegistros(idRegistro: number) {
    const optRegistro = { Id: idRegistro }
    return this.http.post(`${this.baseUrl}getRegistros.php`, JSON.stringify(optRegistro));
  }

  getRegistrosDni(dni: string) {
    const optEvento = { dni: dni }
    return this.http.post(`${this.baseUrl}getRegistrosDni.php`, JSON.stringify(optEvento));
  }

  borrarParticipante(idParticipante: string, idEvento: string){
    const optBorrarParticipante = { idParticipante: idParticipante, idEvento: idEvento };
    return this.http.post(`${this.baseUrl}borrarParticipante.php`, JSON.stringify(optBorrarParticipante));
  }

  /**
   * A partid de aqui son cosas para iniciar sesion
   */
  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
  /**
   * Usar esta funcion para traer todo lo del usuario y en base a esto modificar la web
   * en tiempo real y cambiar los enlaces por los respenctivos de una persoan que 
   * a iniciado sesion
   * completar esta funcion para que envie a un nuevo archivo php y que devuelva todos
   * los datos del usuario
   */
  getUserLogged(): Observable<any> {
    const tokenU = this.getToken();
    const algo = { token: tokenU };
    // Aquí iría el endpoint para devolver el usuario para un token
    return this.http.post(`${this.baseUrl}getUser.php`, JSON.stringify(algo));
  }
}
