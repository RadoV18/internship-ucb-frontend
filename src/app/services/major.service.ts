import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MajorDto } from '../dto/major.dto';
import {ResponseDto} from "../dto/response.dto";

@Injectable({
  providedIn: 'root',
})
export class MajorService {
  constructor(private http: HttpClient) {}

  getMajors() {
    return this.http.get<ResponseDto<MajorDto[]>>(`${environment.API_URL}/api/majors`);
  }
}
