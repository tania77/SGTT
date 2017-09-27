import { Usuario } from '../types/usuario.type';
import { Team } from '../types/team.type';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';


@Injectable()
export class EquiposService {

  constructor() { }

  public getTeamByOrganizationId(idOrganization: string): Promise<Team> {
    return window['Trello'].get('organizations/' + idOrganization);
  }

  public getMyTeams(): Promise<Team[]> {
    return window['Trello'].get('members/me/organizations');
  }
  public getTeamsByUserId(userId: string): Promise<Team[]> {
    return window['Trello'].get('members/' + userId + '/organizations');
  }

  public createTeamByName(name: string) {
    console.log('crear equipo');
  }
  public deleteTeamById(id: string): Promise<any> {
    return window['Trello'].delete('/organizations/' + id);
  }
}
