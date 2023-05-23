import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonSkillDto } from '../dto/person.skill.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonSkillService {

  constructor(private http: HttpClient) { }

  getPersonSkills(id: number) {
    return this.http.get<PersonSkillDto[]>(`${environment.API_URL}/api/personskills` + `/` + id);
  }

  savePersonSkill(skill: PersonSkillDto) {
    return this.http.post<PersonSkillDto>(`${environment.API_URL}/api/personskills`, skill);
  }

  deletePersonSkill(id: number) {
    return this.http.delete<any>(`${environment.API_URL}/api/personskills` + `/` + id);
  }
}
