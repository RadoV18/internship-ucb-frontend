import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseDto } from '../dto/response.dto';
import { PersonDto } from '../dto/person.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  public getPersonByEmail(email: string): Observable<ResponseDto<PersonDto>> {
    return this.http.get<ResponseDto<PersonDto>>(
      `${environment.API_URL}/person?email=${email}`
    );
  }

  public updatePerson(person: PersonDto): Observable<ResponseDto<string>> {
    let formData = new FormData();
    let data = JSON.stringify({
      personId: person.personId,
      firstName: person.firstName,
      lastName: person.lastName,
      ci: person.ci,
      phoneNumber: person.phoneNumber,
    });
    formData.append('data', data);
    if (person.cvFile) {
      formData.append('cvFile', person.cvFile);
    }
    return this.http.put<ResponseDto<string>>(
      `${environment.API_URL}/person`,
      formData
    );
  }
}
