import { Component, OnInit } from '@angular/core';
import { Cdcs } from 'src/app/modelo/cdcs';
import { Curso } from 'src/app/modelo/curso';
import { Instructor } from 'src/app/modelo/instructor';
import { Instructorcurso } from 'src/app/modelo/instructorcurso';
import { Trabajador } from 'src/app/modelo/trabajador';
import { Trabajadorcurso } from 'src/app/modelo/trabajadorcurso';
import { InstructorService } from 'src/app/servicios/instructor.service';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';
import { TrabajadorcursoService } from 'src/app/servicios/trabajadorcurso.service';

@Component({
  selector: 'app-lista-talleres',
  templateUrl: './lista-talleres.component.html',
  styleUrls: ['./lista-talleres.component.css']
})
export class ListaTalleresComponent implements OnInit {
  trabajador = new Trabajador();
  trabacursos = new Trabajadorcurso();
  tablatrabajadorcurso:Trabajadorcurso[];
  cursoslista : Curso[];
  trabajadorcurso = new Trabajadorcurso();
  cdcslista : Cdcs[];
  contador :number;;
  instructorcursovar= new Instructorcurso();
  instructor = new Instructor();
  arreinstructor:Instructor[];

  constructor(public trabajadorcursoService:TrabajadorcursoService, public instructorservicio:InstructorService,
    public trabajadorServicio:TrabajadorService) { }

  ngOnInit(): void {
    this.obtenerListaCurso();
    this.obtenerSelectInstructores();
    this.obtenerSelectCdcs();
  }

  consultarListaTalleres(){

  }

  obtenerListaCurso(){
    this.trabajadorcursoService.obtenerListaCurso().subscribe(
      response => {this.cursoslista=response;
                }
    );
  }

  obtenerSelectInstructores(){
    this.instructorservicio.obtenerSelectIntructor().subscribe(
      response => {this.arreinstructor = response;
      }
    );
  }

  obtenerSelectCdcs(){
    this.trabajadorServicio.obtenerListaCdcs().subscribe(
      response=> {this.cdcslista=response;
                }
    );
  }

  ObtenerConsultas(numeroconsulta:number,idinstructor:number,idcurso:number,idcdc:number,periodo:string,horaInicio:string){
    this.trabajadorcursoService.obtenerConsulta(numeroconsulta,idinstructor,idcurso,idcdc,periodo,horaInicio).subscribe(
      response => {this.tablatrabajadorcurso = response;
      }
    );
  }


}
