import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NewCocheComponent } from './components/new-coche/new-coche.component';
import { ModificarCocheComponent } from './components/modificar-coche/modificar-coche.component';
import { BorrarCocheComponent } from './components/borrar-coche/borrar-coche.component';
import { NewEventoComponent } from './components/new-evento/new-evento.component';
import { VerEventoComponent } from './components/ver-evento/ver-evento.component';
import { RegistroEventoComponent } from './components/registro-evento/registro-evento.component';
import { ModificarPerfilComponent } from './components/modificar-perfil/modificar-perfil.component';
import { VerEventosComponent } from './components/ver-eventos/ver-eventos.component';
import { VerEventosCreadosComponent } from './components/ver-eventos-creados/ver-eventos-creados.component';
import { ModificarEventoComponent } from './components/modificar-evento/modificar-evento.component';
import { CancelarEventoComponent } from './components/cancelar-evento/cancelar-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PerfilComponent,
    NewCocheComponent,
    ModificarCocheComponent,
    BorrarCocheComponent,
    NewEventoComponent,
    VerEventoComponent,
    RegistroEventoComponent,
    ModificarPerfilComponent,
    VerEventosComponent,
    VerEventosCreadosComponent,
    ModificarEventoComponent,
    CancelarEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
