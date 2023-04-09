import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario/usuario.module';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class SQLserviceService {

  baseUrl = "http://alvarogomezpracticas.es:9000/";

  constructor(private http: HttpClient, private cookies: CookieService) { }

  addUser(usuario: Usuario) {
    return this.http.post(`${this.baseUrl}post.php`, JSON.stringify(usuario));
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}loginUser.php`, JSON.stringify(user));
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
    const algo = { token: tokenU};
    // Aquí iría el endpoint para devolver el usuario para un token
    return this.http.post(`${this.baseUrl}getUser.php`, JSON.stringify(algo));
  }
}
