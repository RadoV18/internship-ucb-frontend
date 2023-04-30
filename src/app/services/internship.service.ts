import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";
import {ResponseDto} from "../dto/response.dto";
import {ActiveInternshipDto} from "../dto/active.internship.dto";
import {ApplicantDto} from "../dto/applicant.dto";

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  constructor(private http: HttpClient) {}

  saveInternship(internship: any) {
    return this.http.post(`${environment.API_URL}/internships`, internship);
  }

  getActiveInternshipsByInstitutionId(id: number): Observable<ResponseDto<Array<ActiveInternshipDto>>> {
    return this.http.get<ResponseDto<Array<ActiveInternshipDto>>>(`${environment.API_URL}/api/internships/institution/${id}`)
  }

  getApplicantsByInternshipId(id: number): Observable<ResponseDto<Array<ApplicantDto>>> {
    return this.http.get<ResponseDto<Array<ApplicantDto>>>(`${environment.API_URL}/internships/${id}/applicants`)
  }
}
