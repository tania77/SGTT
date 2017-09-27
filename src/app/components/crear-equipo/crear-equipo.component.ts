import { EquiposService } from '../../services/equipos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.less']
})
export class CrearEquipoComponent implements OnInit {

  constructor(private _equiposService: EquiposService) { }

  ngOnInit() {
  }

}
