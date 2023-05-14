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

  isUserAuthenticated() : boolean {
    return localStorage.getItem('email') !== null;
  }

  getAuthenticatedUser() : string | null {
    return localStorage.getItem('email');
  }

  setAuthenticatedUser(email: string) : void {
    localStorage.setItem('email', email);
  }

  logout() : void {
    localStorage.removeItem('email');
  }
}
