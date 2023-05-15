import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonDto } from '../dto/person.dto';
import { ResponseDto } from '../dto/response.dto';
import { environment } from 'src/environments/environment';
import { UserUcbDto } from '../dto/user.ucb.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUSerByEmail(email: string): Observable<ResponseDto<UserUcbDto>> {
    return this.http.get<ResponseDto<UserUcbDto>>(
      `${environment.API_URL}/${email}`
    );
  }
}
