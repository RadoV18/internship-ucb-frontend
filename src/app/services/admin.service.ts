import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from "../../environments/environment";
import {InstitutionDto} from "../dto/institution.dto";
import {Observable} from "rxjs";
import { Graduate } from '../dto/graduate';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  getNewInstitutions() : Observable<Array<InstitutionDto>> {
    return this.http.get<Array<InstitutionDto>>(`${environment.API_URL}/api/admin/new-institutions`);
  }

  getInstitutions() : Observable<Array<InstitutionDto>> {
    return this.http.get<Array<InstitutionDto>>(`${environment.API_URL}/admin/institutions`);
  }

  getGraduates() : Observable<Array<Graduate>> {
    return this.http.get<Array<Graduate>>(`${environment.API_URL}/admin/graduates`);
  }

  setEstadoSolicitud(id:number){
    return this.http.put(`${environment.API_URL}/users/solicitud/${id}`,null);
  }

}
