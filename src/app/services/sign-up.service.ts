import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { InstitutionSignUpDto } from "../dto/institution.sign.up.dto";
import {Observable} from "rxjs";
import {ResponseDto} from "../dto/response.dto";
import {VerificationCodeDto} from "../dto/verification.code.dto";
import {VerificationCodeComponent} from "../components/verification-code/verification-code.component";
import {VerificationCodeReqDto} from "../dto/verification.code.req.dto";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) {  }

  public institutionSignUp(institution: InstitutionSignUpDto): Observable<ResponseDto<VerificationCodeDto>> {
    // multipart/form-data request
    const formData = new FormData();
    formData.append('name', institution.name);
    formData.append('area', institution.area);
    formData.append('description', institution.description);
    formData.append('contactFirstName', institution.contactFirstName);
    formData.append('contactLastName', institution.contactLastName);
    formData.append('contactPosition', institution.contactPosition);
    formData.append('contactEmail', institution.contactEmail);
    formData.append('contactPhone', institution.contactPhone);
    formData.append('email', institution.email);
    formData.append('password', institution.password);
    formData.append('logo', institution.logo);
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    return this.http.post<ResponseDto<VerificationCodeDto>>(
      `${environment.API_URL}/api/sign-up/institution`,
      formData,
      {
        headers: headers
      }
    );
  }

  public verificationCode(verificationCodeReqDto : VerificationCodeReqDto): Observable<ResponseDto<boolean>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<ResponseDto<boolean>>(
      `${environment.API_URL}/api/sign-up/verification-code`,
      verificationCodeReqDto,
      {
        headers: headers
      }
    );
  }
}
