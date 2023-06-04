import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../dto/response.dto';
import { Observable } from 'rxjs';
import { ProfileDto } from '../dto/profile.dto';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  findStudentProfileByEmail(email: String) {
    return this.http.get<ResponseDto<ProfileDto>>(
      `${environment.API_URL}/profile/${email}`
    );
  }
  public updateStudent(
    studentProfile: ProfileDto
  ): Observable<ResponseDto<string>> {
    let formData = new FormData();
    let data = JSON.stringify({
      personId: studentProfile.personId,
      phoneNumber: studentProfile.phoneNumber,
      semester: studentProfile.semester,
      graduate: studentProfile.graduate,
    });
    formData.append('data', data);
    if (studentProfile.cvFile) {
      formData.append('cvFile', studentProfile.cvFile);
    }
    return this.http.put<ResponseDto<string>>(
      `${environment.API_URL}/profile`,
      formData
    );
  }
}
