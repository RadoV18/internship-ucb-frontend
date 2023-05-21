import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CityDto } from '../dto/city.dto';
import {ResponseDto} from "../dto/response.dto";

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  getCities() {
    return this.http.get<ResponseDto<CityDto[]>>(`${environment.API_URL}/api/cities`);
  }
}
