import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Internship } from '../dto/internship';
import {ResponseDto} from "../dto/response.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  constructor(private http: HttpClient) {}

  saveInternship(internship: any) {
    return this.http.post(`${environment.API_URL}/internship`, internship);
  }

  getPendingInternships(): Observable<ResponseDto<Array<Internship>>>{
    return this.http.get<ResponseDto<Array<Internship>>>(`${environment.API_URL}/api/internships/pending`);
  }

  putInternshipState(state:number,id:number){
    return this.http.put(`${environment.API_URL}/internship/${state}/${id}`,null);
  }
}
