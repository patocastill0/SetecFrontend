import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipio } from '../modelo/municipio';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  private baseURL ="http://localhost:8080/api/municipio";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});


  constructor(public httpCliente:HttpClient, public authservice:AuthserviceService) { }

  private agregarAuthorizationHeader(){
    let token= this.authservice.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+token);
    }
    return this.httpHeaders;
  }



  obtenerListaMunicipios(term:string):Observable<Municipio[]>{
    return this.httpCliente.get<Municipio[]>(`${this.baseURL}/term/${term}`,{headers:this.agregarAuthorizationHeader()});
  }


}
