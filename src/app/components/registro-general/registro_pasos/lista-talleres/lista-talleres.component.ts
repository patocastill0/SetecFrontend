import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/modelo/curso';
import { Trabajador } from 'src/app/modelo/trabajador';
import { Trabajadorcurso } from 'src/app/modelo/trabajadorcurso';
import { TrabajadorcursoService } from 'src/app/servicios/trabajadorcurso.service';

@Component({
  selector: 'app-lista-talleres',
  templateUrl: './lista-talleres.component.html',
  styleUrls: ['./lista-talleres.component.css']
})
export class ListaTalleresComponent implements OnInit {
  trabajador = new Trabajador();
  trabacursos = new Trabajadorcurso();
  cursoslista : Curso[];
  constructor(public trabajadorcursoService:TrabajadorcursoService) { }

  ngOnInit(): void {
    this.obtenerListaCurso();
  }

  obtenerListaCurso(){
    this.trabajadorcursoService.obtenerListaCurso().subscribe(
      response => {this.cursoslista=response;
                }
    );
  }


}
