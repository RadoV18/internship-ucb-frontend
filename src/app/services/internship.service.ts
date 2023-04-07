import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  URL: string = 'http://192.168.194.48:8080/internship';
  constructor(private http: HttpClient) {}

  saveInternship(internship: any) {
    return this.http.post(this.URL, internship);
  }
}
