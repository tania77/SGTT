import { Board } from '../../types/board.type';
import { BoardsService } from '../../services/boards.service';
import { Membership } from '../../types/membership.type';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../types/usuario.type';
import { Team } from '../../types/team.type';
import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.less']
})
export class EquiposComponent implements OnInit {
  public teams: Team[];
  public crearEquipo = true;

  constructor(private _equiposService: EquiposService, private _usuariosService: UsuariosService, private _boardsService: BoardsService) { }

  ngOnInit() {
    this._equiposService.getMyTeams().then(res => {
      this.teams = res;
      res.forEach(team => {
        team.memberships.forEach(membership => {
          this._usuariosService.getUserByMembershipId(membership.idMember).then((user) => membership.user = user);
        });
      });
    });
  }

  public borrarEquipo(equipoABorrar: Team) {
    this._boardsService.getBoardsByOrganizationId(equipoABorrar.id).then(res => {
      res.forEach(board => this._boardsService.deleteBoardById(board.id));
      this._equiposService.deleteTeamById(equipoABorrar.id).then(() => this.teams = this.teams.filter(team => team !== equipoABorrar));
    });
  }
}
