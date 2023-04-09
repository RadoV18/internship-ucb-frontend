import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from "../../environments/environment";
import {InstitutionDto} from "../dto/institution.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  getNewInstitutions() : Observable<Array<InstitutionDto>> {
    return this.http.get<Array<InstitutionDto>>(`${environment.API_URL}/api/admin/new-institutions`);
  }
}
