import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class SQLserviceService {

  baseUrl = "http://alvarogomezpracticas.es:9000/";

  constructor(private http: HttpClient) { }

  addUser(usuario: Usuario) {
    return this.http.post(`${this.baseUrl}post.php`, JSON.stringify(usuario));
  }
}
