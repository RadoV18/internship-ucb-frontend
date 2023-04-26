import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Major } from '../dto/major';

@Injectable({
  providedIn: 'root',
})
export class MajorService {
  constructor(private http: HttpClient) {}

  getMajors() {
    return this.http.get<Major[]>(`${environment.API_URL}/major`);
  }
}
