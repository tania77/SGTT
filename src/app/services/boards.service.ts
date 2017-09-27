import { Board } from '../types/board.type';
import { Injectable } from '@angular/core';

@Injectable()
export class BoardsService {

  constructor() { }
  public deleteBoardById(id: string) {
    window['Trello'].delete('boards/' + id);
  }
  public getBoardsByOrganizationId(id: string): Promise<Board[]> {
    return window['Trello'].get('organizations/' + id + '/boards');
  }
}
