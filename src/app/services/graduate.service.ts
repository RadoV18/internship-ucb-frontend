import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Graduate} from "../dto/graduate";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GraduateService {

  constructor(private http: HttpClient) { }

  getGraduates() : Observable<Array<Graduate>> {
    return this.http.get<Array<Graduate>>(`${environment.API_URL}/api/graduates/new`);
  }
}
