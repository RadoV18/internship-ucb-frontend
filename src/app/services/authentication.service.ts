import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { AuthDto } from "../dto/auth.dto";
import { ResponseDto } from "../dto/response.dto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  postLogin(email: string, password: string): Observable<ResponseDto<AuthDto>> {
    return this.http.post<ResponseDto<AuthDto>>(`${environment.API_URL}/login`, { email, password });
  }

  isUserAuthenticated(): boolean {
    return localStorage.getItem('email') !== null;
  }

  getAuthenticatedUser(): string | null {
    return localStorage.getItem('email');
  }

  getAuthenticatedUserName(): string | null {
    return localStorage.getItem('name');
  }

  getAuthenticatedUserPicture(): string | null {
    return localStorage.getItem('profilePictureUrl');
  }

  getAccountType(): string | null {
    return localStorage.getItem('accountType');
  }

  setAuthenticatedUser(authDto: AuthDto): void {
    if (authDto.userId) {
      localStorage.setItem('userId', authDto.userId.toString());
    }
    if (authDto.id) {
      localStorage.setItem('id', authDto.id.toString());
    }
    if (authDto.accountType) {
      localStorage.setItem('accountType', authDto.accountType.toString());
    }
    if (authDto.email) {
      localStorage.setItem('email', authDto.email);
    }
    if (authDto.name) {
      localStorage.setItem('name', authDto.name);
    }
    if (authDto.profilePictureUrl) {
      localStorage.setItem('profilePictureUrl', authDto.profilePictureUrl);
    }
  }

  logout(): void {
    localStorage.removeItem('email');
  }

  refreshToken(token: string) {
    return this.http.post(`${environment.API_URL}/login/refreshtoken`, {
      refreshToken: token
    });
  }
}
