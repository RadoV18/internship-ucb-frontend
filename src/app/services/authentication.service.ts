import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {  }

  postLogin(email: string, password: string) {
    return this.http.post('http://localhost:8080/login', {email, password});
  }
}
