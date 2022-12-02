import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formato-registro',
  templateUrl: './formato-registro.component.html',
  styleUrls: ['./formato-registro.component.css']
})
export class FormatoRegistroComponent implements OnInit {
   date = new Date();
  constructor() {

   }

  ngOnInit(): void {
  }

}
