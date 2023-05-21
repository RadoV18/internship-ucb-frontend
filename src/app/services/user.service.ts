import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  setApprovalState(id: number, status: number){
    return this.http.put(`${environment.API_URL}/api/users/${id}/status/${status}`,null);
  }
}
