import { Usuario } from '../types/usuario.type';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  constructor() { }

  public getUsersByTeamId(org: string): Promise<Usuario[]> {
    return window['Trello'].get('organizations/' + org + '/members');
  }

  public getUserByMembershipId(membershipId: string): Promise<Usuario> {
    return window['Trello'].get('members/' + membershipId);
  }
}
