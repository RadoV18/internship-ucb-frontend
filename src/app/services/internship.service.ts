import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  constructor(private http: HttpClient) {}

  saveInternship(internship: any) {
    return this.http.post(`${environment.API_URL}/internship`, internship);
  }
}
