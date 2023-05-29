import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseDto } from '../dto/response.dto';
import { ActiveInternshipDto } from '../dto/active.internship.dto';
import { ApplicantDto } from '../dto/applicant.dto';
import { Page } from '../dto/page.dto';
import { InternshipListDto } from '../dto/internship.list.dto';
import { Internship } from '../dto/internship';
import { InternshipDto } from '../dto/internship.dto';
import {InternshipApplicationDto} from "../dto/internship.application.dto";

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  constructor(private http: HttpClient) { }

  saveInternship(internship: any): Observable<ResponseDto<any>> {
    return this.http.post<ResponseDto<any>>(`${environment.API_URL}/api/internships`, internship);
  }

  getActiveInternshipsByInstitutionId(
    id: number
  ): Observable<ResponseDto<Array<ActiveInternshipDto>>> {
    return this.http.get<ResponseDto<Array<ActiveInternshipDto>>>(
      `${environment.API_URL}/api/internships/institution/${id}/active`
    );
  }

  getApplicantsByInternshipId(
    id: number
  ): Observable<ResponseDto<Array<ApplicantDto>>> {
    return this.http.get<ResponseDto<Array<ApplicantDto>>>(
      `${environment.API_URL}/api/internships/${id}/applicants`
    );
  }

  getFilteredInternships(
    major: string | null,
    city: string | null,
    startingDate: Date | null,
    endingDate: Date | null,
    page: number
  ) {
    let sDate = null;
    let eDate = null;
    if (startingDate && endingDate) {
      sDate = `${startingDate?.getFullYear()}-${
        startingDate?.getMonth() + 1
      }-${startingDate?.getDate()}`;
      eDate = `${endingDate?.getFullYear()}-${
        endingDate?.getMonth() + 1
      }-${endingDate?.getDate()}`;
    }
    return this.http.get<ResponseDto<Page<InternshipListDto[]>>>(
      `${environment.API_URL}/api/internships?major=${major}&city=${city}&startingDate=${sDate}&endingDate=${eDate}&page=${page}`
    );
  }

  getPendingInternships(): Observable<ResponseDto<Array<Internship>>>{
    return this.http.get<ResponseDto<Array<Internship>>>(`${environment.API_URL}/api/internships/pending`);
  }

  putInternshipState(id: number, state: number){
    return this.http.put(`${environment.API_URL}/api/internships/${id}/status/${state}`,null);
  }

  getInternships() {
    return this.http.get<InternshipDto[]>(`${environment.API_URL}/api/internships`);
  }

  getInternshipDetails(id: number) {
    return this.http.get<ResponseDto<InternshipDto>>(`${environment.API_URL}/api/internships/${id}/details`);
  }

  updateApplicationStatus(id: number, applicationId: number, status: number, message: string): Observable<ResponseDto<any>> {
    return this.http.put<ResponseDto<any>>(`${environment.API_URL}/api/internships/${id}/applications/${applicationId}/status/${status}`,message);
  }

  applyToInternship(id: number, body: InternshipApplicationDto): Observable<ResponseDto<any>> {
    return this.http.post<ResponseDto<any>>(`${environment.API_URL}/api/internships/${id}`, body);
  }
  
  getInternshipById(id: number){
    return this.http.get<ResponseDto<InternshipDto>>(`${environment.API_URL}/api/internships/${id}`);
  }

  updateInternship(internship: any){
    return this.http.put<ResponseDto<any>>(`${environment.API_URL}/api/internships`,internship);
  }
}
