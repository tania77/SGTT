import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './components/equipos/equipos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'equipos', component: EquiposComponent },
    { path: 'usuarios', component: UsuariosComponent }
];

export const routing = RouterModule.forRoot(routes);
