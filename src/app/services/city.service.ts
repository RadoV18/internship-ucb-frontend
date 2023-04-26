import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CityDto } from '../dto/city.dto';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  getCities() {
    return this.http.get<CityDto[]>(`${environment.API_URL}/city`);
  }
}
