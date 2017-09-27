import { BoardsService } from './services/boards.service';
import { UsuariosService } from './services/usuarios.service';
import { EquiposService } from './services/equipos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { routing } from './app.routes';
import { EquiposComponent } from './components/equipos/equipos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { CrearEquipoComponent } from './components/crear-equipo/crear-equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    EquiposComponent,
    UsuariosComponent,
    LoginComponent,
    CrearEquipoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [EquiposService, UsuariosService, BoardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
