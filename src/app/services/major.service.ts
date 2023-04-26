import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MajorDto } from '../dto/major.dto';

@Injectable({
  providedIn: 'root',
})
export class MajorService {
  constructor(private http: HttpClient) {}

  getMajors() {
    return this.http.get<MajorDto[]>(`${environment.API_URL}/major`);
  }
}
