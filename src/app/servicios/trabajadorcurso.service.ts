import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Curso } from '../modelo/curso';
import { Instructor } from '../modelo/instructor';
import { Trabajadorcurso } from '../modelo/trabajadorcurso';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorcursoService {
  private baseURL="http://localhost:8080/api/trabajador";
  private baseURLCU ="http://localhost:8080/api/trabajadorcurso";


  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(public httpClient:HttpClient, public authService:AuthserviceService ) { }

  private agregarAuthorizationHeader(){
    let token= this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+token);
    }
    return this.httpHeaders;
  }

  creartrabajadorcurso(trabajadorcurso:Trabajadorcurso):Observable<Trabajadorcurso>{
    return this.httpClient.post<Trabajadorcurso>(`${this.baseURLCU}`,trabajadorcurso).pipe(
      catchError(e=>{
        if(e.status==302){

        }
        return throwError(e);
      })
    );
  }

  obtenerListaCurso():Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(`${this.baseURLCU}/curso`,{headers: this.agregarAuthorizationHeader()});
  }

  obtenerCursoTrabajador(id:string):Observable<Trabajadorcurso[]>{
    return this.httpClient.get<Trabajadorcurso[]>(`${this.baseURLCU}/cursos/id_trbajador/${id}`,{headers: this.agregarAuthorizationHeader()});
  }

  obtenerListaTrabajadorescu(pageNo: number):Observable<any>{
    return this.httpClient.get(`${this.baseURL}/page/${pageNo}`).pipe(
      map((response:any)=>{
        return response
      })
    )
  }

  obtenerConsulta(numeroconsulta:number,idinstructor:number,idcurso:number,idcdc:number,periodo:string,horaInicio:string){
    return this.httpClient.get<Trabajadorcurso[]>(`${this.baseURLCU}/consultas/${numeroconsulta}/${idinstructor}/${idcurso}/${idcdc}/${periodo}/${horaInicio}`,{headers: this.agregarAuthorizationHeader()});
  }
}
