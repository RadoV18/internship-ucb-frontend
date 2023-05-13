import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseDto } from '../dto/response.dto';
import { ActiveInternshipDto } from '../dto/active.internship.dto';
import { ApplicantDto } from '../dto/applicant.dto';
import { Page } from '../dto/page.dto';
import { InternshipListDto } from '../dto/internship.list.dto';

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  constructor(private http: HttpClient) {}

  saveInternship(internship: any): Observable<ResponseDto<any>> {
    return this.http.post<ResponseDto<any>>(`${environment.API_URL}/api/internships`, internship);
  }

  getActiveInternshipsByInstitutionId(id: number): Observable<ResponseDto<Array<ActiveInternshipDto>>> {
    return this.http.get<ResponseDto<Array<ActiveInternshipDto>>>(`${environment.API_URL}/api/internships/institution/${id}/active`)
  }

  getApplicantsByInternshipId(id: number): Observable<ResponseDto<Array<ApplicantDto>>> {
    return this.http.get<ResponseDto<Array<ApplicantDto>>>(`${environment.API_URL}/api/internships/${id}/applicants`)
  }

  getFilteredInternships(
    majorList: number[] | null,
    city: string | null,
    startingDate: Date | null,
    endingDate: Date | null,
    page: number
  ) {
    const sDate = startingDate
      ?.toISOString()
      .replace('T', ' ')
      .replace('Z', ' ');
    const eDate = endingDate?.toISOString().replace('T', ' ').replace('Z', ' ');
    return this.http.get<ResponseDto<Page<InternshipListDto[]>>>(
      `${environment.API_URL}/internship?major=${majorList}&city=${city}&startingDate=${sDate}&endingDate=${eDate}&page=${page}`
    );
  }
}
