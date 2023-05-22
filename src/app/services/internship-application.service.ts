import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InternshipAplicationDto } from '../dto/internship.application.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InternshipApplicationService {
  constructor(private http: HttpClient) { }

  saveInternshipAplication(internshipApplication: InternshipAplicationDto) {

    return this.http.post<any>(`${environment.API_URL}/api/internshipapplications`, internshipApplication);
  }
}
