import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from "../../environments/environment";
import {InstitutionDto} from "../dto/institution.dto";
import {Observable} from "rxjs";
import { Graduate } from '../dto/graduate';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

}
