import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Internship } from '../dto/internship';

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  constructor(private http: HttpClient) {}

  saveInternship(internship: any) {
    return this.http.post(`${environment.API_URL}/internship`, internship);
  }

  getInternship(){
    return this.http.get<Array<Internship>>(`${environment.API_URL}/internship`);
  }

  putInternshipState(state:number,id:number){
    return this.http.put(`${environment.API_URL}/internship/${state}/${id}`,null);
  }
}
