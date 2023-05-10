import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../dto/response.dto';
import { Page } from '../dto/page.dto';
import { InternshipListDto } from '../dto/internship.list.dto';

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  constructor(private http: HttpClient) {}

  saveInternship(internship: any) {
    return this.http.post(`${environment.API_URL}/internship`, internship, {
      observe: 'response',
      responseType: 'text',
    });
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
