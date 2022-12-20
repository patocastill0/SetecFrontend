import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/modelo/curso';
import { Instructor } from 'src/app/modelo/instructor';
import { Instructorcurso } from 'src/app/modelo/instructorcurso';
import { Trabajadorcurso } from 'src/app/modelo/trabajadorcurso';
import { CursoService } from 'src/app/servicios/curso.service';
import { InstructorService } from 'src/app/servicios/instructor.service';
import { InstructorcursoService } from 'src/app/servicios/instructorcurso.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-intructor-curso',
  templateUrl: './intructor-curso.component.html',
  styleUrls: ['./intructor-curso.component.css']
})
export class IntructorCursoComponent implements OnInit {
  trabacursos = new Trabajadorcurso();

  instructor = new Instructor();
  curso = new Curso();
  arrregloinstructor:Instructor[];
  arreglocursos:Curso[];
  instructorcursovar= new Instructorcurso();
  constructor(public activateRouter:ActivatedRoute, public instructorservicio:InstructorService,
     public cursoservicio:CursoService, public instructorcurso:InstructorcursoService) { }

  ngOnInit(): void {
    this.obtenerInstructores(0);
    this.obtenerListaCursos(0);
  }

  crearInstructor(){
    this.instructorservicio.crearInstructorServicio(this.instructor).subscribe(
      response =>{ this.instructor = response;
        swal('Instructor creado',`Instructor ${this.instructor.nombre} ${this.instructor.apPaterno} ${this.instructor.apMaterno} creado con exito`,'success');
      }
    )
  }

  public obtenerInstructores(page:number){
    this.instructorservicio.obtenerListaInstructores(page).subscribe(
      response=>{
        this.arrregloinstructor=response.contenido as Instructor[];
      }
    );
  }


  crearCurso(){
    this.instructorcursovar.idcurso=this.curso.idcurso;
    //this.instructorcursovar.idinstructor=this.instructor.idInstructor;
    this.instructorcurso.crearInstructorCursoServicio(this.instructorcursovar).subscribe(

    );


    this.cursoservicio.crearCursoServicio(this.curso).subscribe(
      response =>{this.curso = response
        swal('Curso creado',`Curso ${this.curso.nombreCurso} creado con exito`,'success')
      }
    );
  }

  public obtenerListaCursos(page:number){
    this.cursoservicio.obtenerListaCursos(page).subscribe(
      response =>{
        this.arreglocursos = response.contenido as Curso[];
      }
    );
  }

  obtenerSelectInstructores(){
    this.instructorservicio.obtenerSelectIntructor().subscribe(
      response => {this.arrregloinstructor = response;
      }
    );
  }

}
