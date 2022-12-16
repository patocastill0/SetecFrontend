import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from 'src/app/modelo/instructor';
import { InstructorService } from 'src/app/servicios/instructor.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-intructor-curso',
  templateUrl: './intructor-curso.component.html',
  styleUrls: ['./intructor-curso.component.css']
})
export class IntructorCursoComponent implements OnInit {

  instructor = new Instructor();

  constructor(public activateRouter:ActivatedRoute, public instructorservicio:InstructorService) { }

  ngOnInit(): void {
  }

  crearInstructor(){

    this.instructorservicio.crearInstructorServicio(this.instructor).subscribe(
      response =>{ this.instructor = response;
        swal('Instructor creado',`Instructor ${this.instructor.nombre} ${this.instructor.apPaterno} ${this.instructor.apMaterno} creado con exito`,'success');
      }
    )
  }
}
