import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CampusMajorDto } from '../dto/campusmajor.dto';

@Injectable({
  providedIn: 'root'
})
export class CampusMajorService {

  constructor(private http: HttpClient) { }

  getCampusMajors() {
    return this.http.get<CampusMajorDto[]>(`${environment.API_URL}/api/campusmajor`)
  }
}
