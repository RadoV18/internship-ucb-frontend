import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SkillDto } from '../dto/SkillDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getSkills() {
    return this.http.get<SkillDto[]>(`${environment.API_URL}/api/skills`);
  }
}
