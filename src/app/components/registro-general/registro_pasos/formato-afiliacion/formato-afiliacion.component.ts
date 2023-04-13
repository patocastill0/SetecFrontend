import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/modelo/trabajador';
import { TrabajadorService } from 'src/app/servicios/trabajador.service';

@Component({
  selector: 'app-formato-afiliacion',
  templateUrl: './formato-afiliacion.component.html',
  styleUrls: ['./formato-afiliacion.component.css']
})

export class FormatoAfiliacionComponent implements OnInit {
  trabajador = new Trabajador();
  date = new Date();
  seleccionado=0;
  seleccionadopago='0';
  textopagomostrar="";
  nombreempresa="";
  domicilioempresa="";
  constructor(public trabajadorservicio:TrabajadorService) { }

  ngOnInit(): void {
    let texto1: string = "Este es el primer párrafo.";
    let texto2: string = "Este es el segundo párrafo.";
    let combinaparrafo: string = texto1 + texto2;
  }
  buscarfolio(event){
    let dato = event.target.value;

    if (event.key === "Enter"){

      this.trabajadorservicio.obtenerInfofolio(dato).subscribe(
        response => {
          console.log(response,"este es mi event");
          this.trabajador = response

        }
      );
    }
  }

  limpairdatos(){
    this.trabajador = new Trabajador();
  }
  mostrarvalor(){
    console.log(this.seleccionado,"este es mi seleecionado");
  }
  cambiarestado(){
    this.seleccionado=0;
  }
  cambiarestadopago(){
    this.seleccionadopago='0';
  }

}
