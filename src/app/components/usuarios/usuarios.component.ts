import { Team } from '../../types/team.type';
import { EquiposService } from '../../services/equipos.service';
import { Usuario } from '../../types/usuario.type';
import { UsuariosService } from '../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.less']
})
export class UsuariosComponent implements OnInit {
  public users: Usuario[] = [];

  constructor(private _usuariosService: UsuariosService, private _equiposService: EquiposService) { }

  ngOnInit() {
    this._equiposService.getMyTeams().then(res => {
      res.forEach(team => {
        this._usuariosService.getUsersByTeamId(team.id).then(usus => {
          this.users = this.users.concat(usus.filter(usu => {
            return this.users.filter(current => current.id === usu.id).length === 0;
          }));
          usus.forEach(usu => {
            this._equiposService.getTeamsByUserId(usu.id).then(teams => usu.teams = teams);
          });
        });
      });
    });
  }
}
