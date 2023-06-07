import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseDto } from '../dto/response.dto';
import { UserUcbDto } from '../dto/user.ucb.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  setApprovalState(id: number, status: number){
    return this.http.put(`${environment.API_URL}/api/users/${id}/status/${status}`,null);
  }

  public getUSerByEmail(email: string): Observable<ResponseDto<UserUcbDto>> {
    return this.http.get<ResponseDto<UserUcbDto>>(
      `${environment.API_URL}/${email}`
    );
  }
}
