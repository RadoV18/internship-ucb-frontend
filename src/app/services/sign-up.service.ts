import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { InstitutionSignUpDto } from "../dto/institution.sign.up.dto";
import { Observable } from "rxjs";
import { ResponseDto } from "../dto/response.dto";
import { VerificationCodeDto } from "../dto/verification.code.dto";
import { VerificationCodeComponent } from "../components/verification-code/verification-code.component";
import { VerificationCodeReqDto } from "../dto/verification.code.req.dto";
import { StudentSignUpDto } from '../dto/student.sign.up.dto';
import { GraduateSignUpDto } from '../dto/graduate.sign.up.dto';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  public studentSignUp(student: StudentSignUpDto, profilePicture: File, cvFile: File): Observable<ResponseDto<VerificationCodeDto>> {
    // multipart/form-data request
    const formData = new FormData();
    formData.append('data', JSON.stringify(student));
    // append the logo
    formData.append('profilePicture', profilePicture);
    formData.append('cvFile', cvFile);
    return this.http.post<ResponseDto<VerificationCodeDto>>(
      `${environment.API_URL}/api/sign-up/student`,
      formData
    );
  }

  public graduateSignUp(graduate: GraduateSignUpDto, profilePicture: File, cvFile: File): Observable<ResponseDto<VerificationCodeDto>> {
    // multipart/form-data request
    const formData = new FormData();
    // append to the data the institution object without the logo
    formData.append('data', JSON.stringify(graduate));
    // append the logo
    formData.append('profilePicture', profilePicture);
    formData.append('cvFile', cvFile);
    return this.http.post<ResponseDto<VerificationCodeDto>>(
      `${environment.API_URL}/api/sign-up/graduate`,
      formData
    );
  }

  public institutionSignUp(institution: InstitutionSignUpDto): Observable<ResponseDto<VerificationCodeDto>> {
    // multipart/form-data request
    const formData = new FormData();
    // append to the data the institution object without the logo
    formData.append('data', JSON.stringify({
      name: institution.name,
      area: institution.area,
      description: institution.description,
      contactFirstName: institution.contactFirstName,
      contactLastName: institution.contactLastName,
      contactPosition: institution.contactPosition,
      contactEmail: institution.contactEmail,
      contactPhone: institution.contactPhone,
      email: institution.email,
      password: institution.password
    }));
    // append the logo
    formData.append('image', institution.logo);
    return this.http.post<ResponseDto<VerificationCodeDto>>(
      `${environment.API_URL}/api/sign-up/institution`,
      formData
    );
  }

  public verificationCode(verificationCodeReqDto: VerificationCodeReqDto): Observable<ResponseDto<boolean>> {
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
