import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CampusDto } from '../dto/campus.dto';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  constructor(private http: HttpClient) { }

  getCampusMajors() {
    return this.http.get<CampusDto[]>(`${environment.API_URL}/api/campus`)
  }
}
