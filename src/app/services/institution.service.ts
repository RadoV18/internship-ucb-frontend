import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { InstitutionDto } from "../dto/institution.dto";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient) { }

  getInstitutions() : Observable<Array<InstitutionDto>> {
    return this.http.get<Array<InstitutionDto>>(`${environment.API_URL}/api/institutions/new`);
  }
  
  getInstitutionById(id: number) {
    return this.http.get<InstitutionDto>(`${environment.API_URL}/api/institutions` + `/` + id);
  }

  getInstitutionByUserEmail(email: string) {
    return this.http.get<InstitutionDto>(`${environment.API_URL}/api/institutions/email` + `/` + email);
  }
  updateInstitution(institution: InstitutionDto) {
    return this.http.put(`${environment.API_URL}/api/institutions`, institution);
  }
}
