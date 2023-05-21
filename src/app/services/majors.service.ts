import { Injectable } from '@angular/core';
import { ResponseDto } from '../dto/response.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MajorDto } from '../dto/major.dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MajorsService {
  constructor(private http: HttpClient) {}

  getMajors(
    sort: string = 'majorId'
  ): Observable<ResponseDto<Array<MajorDto>>> {
    return this.http.get<ResponseDto<Array<MajorDto>>>(
      `${environment.API_URL}/api/majors`
    );
  }
}
