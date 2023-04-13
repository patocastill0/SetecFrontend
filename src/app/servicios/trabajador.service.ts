import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthserviceService } from './authservice.service';
import { Trabajador } from '../modelo/trabajador';
import { Observable,throwError } from 'rxjs';
import { map ,catchError} from 'rxjs/operators';
import { Sector } from '../modelo/sector';
import { Cargo } from '../modelo/cargo';
import { Region } from '../modelo/region';
import { Cdcs } from '../modelo/cdcs';
import { environment } from 'src/environments/environment';
import { AlertService } from '../alerts/alert.service';



@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  private baseURL="http://localhost:8080/api/trabajador";

  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});

  constructor(public httpClient:HttpClient, public authService:AuthserviceService,
    public alertService:AlertService) { }

    options = {
      autoClose: true,
      keepAfterRouteChange: false
    };

  private agregarAuthorizationHeader(){
    let token= this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+token);
    }
    return this.httpHeaders;
  }

  obtenerListaTrabajadores(pageNo: number):Observable<any> {
    return this.httpClient.get(`${this.baseURL}/page/${pageNo}`).pipe(
      map((response:any)=>{
        return response
      })
    )
  }

  obtenerInfoTrabajador(id):Observable<Trabajador>{
    return this.httpClient.get<Trabajador>(`${this.baseURL}/${id}`,{headers:this.agregarAuthorizationHeader()});
  }

  obtenerInfofolio(folio):Observable<Trabajador>{
    return this.httpClient.get<Trabajador>(`${this.baseURL}/folio/${folio}`,{headers:this.agregarAuthorizationHeader()});
  }

  obtenerListaSector():Observable<Sector[]>{
    return this.httpClient.get<Sector[]>(`${this.baseURL}/sector`);
  }

  obtenerListaCargo():Observable<Cargo[]>{
    return this.httpClient.get<Cargo[]>(`${this.baseURL}/cargo`);
  }

  obtenerListaRegion():Observable<Region[]>{
    return this.httpClient.get<Region[]>(`${this.baseURL}/region`);
  }
  obtenerListaCdcs():Observable<Cdcs[]>{
    return this.httpClient.get<Cdcs[]>(`${this.baseURL}/cdcs`)
  }

  /**crearTrabajador(trabajador,archivo:File):Observable<Trabajador>{
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("trabajador",trabajador);
    let httpHeaders = new HttpHeaders();
    let token = this.authService.token;
    if(token!=null){
      httpHeaders=httpHeaders.append('Authorization','Bearer '+token)
    }
    return this.httpClient.post<Trabajador>(`${this.baseURL}`,formData,{headers:httpHeaders}).pipe(
      catchError(e=>{
        if(e.status==302){
          this.alertService.error('YA EXISTE UNA CURP ASOCIADA', this.options);
        }
        return throwError(e);
      })
    );
  }**/

  crearTrabajador(trabajador:Trabajador):Observable<Trabajador>{
    return this.httpClient.post<Trabajador>(`${this.baseURL}`,trabajador,{headers:this.agregarAuthorizationHeader()}).pipe(
      catchError(e=>{
        if(e.status==302){
          this.alertService.error('YA EXISTE UNA CURP ASOCIADA', this.options);
        }
        return throwError(e);
      })
    );
  }

  subirFoto(archivo:File,trabajador):Observable<Trabajador>{
    let formData = new FormData();
    formData.append("archivo",archivo);
    formData.append("trabajador",trabajador);
    let httpHeaders = new HttpHeaders();
    let token = this.authService.token;
    if(token!=null){
      httpHeaders=httpHeaders.append('Authorization','Bearer '+token)
    }
    return this.httpClient.post<Trabajador>(`${this.baseURL}/guardarimagen`,formData,{headers:httpHeaders}).pipe(
      map((response: any)=> response.trabajador as Trabajador)
    );
  }


  actualizarTrabajador(trabajador:Trabajador):Observable<Trabajador>{
    return this.httpClient.put<Trabajador>(`${this.baseURL}/${trabajador.id}`,trabajador,{headers:this.agregarAuthorizationHeader()});
  }
  obtenerTrabajador(id):Observable<Trabajador>{
    return this.httpClient.get<Trabajador>(`${this.baseURL}/${id}`);
  }

  obtenerListaTrabajadoresNoUsuarios(term:string):Observable<Trabajador[]>{
    return this.httpClient.get<Trabajador[]>(`${this.baseURL}/term/${term}`,{headers:this.agregarAuthorizationHeader()})
    }
}
