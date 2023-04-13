import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from '../alerts/alert.service';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private baseURL="http://localhost:8080/api/trabajador";
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  constructor(public httpClient:HttpClient, public authService:AuthserviceService, public alertService:AlertService) { }

  private agregarAuthorizationHeader(){
    let token= this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+token);
    }
    return this.httpHeaders;
  }

  combinarparrafos(){

  }

}
