import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InstitutionDto } from '../dto/institution.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient) { }

  getInstitutionById(id: number) {
    return this.http.get<InstitutionDto>(`${environment.API_URL}/api/institutions` + `/` + id);
  }
}
