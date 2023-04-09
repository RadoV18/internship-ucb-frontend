import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  _url = "http://localhost:8080/obtener/instituciones"
  constructor(private http: HttpClient) { }

  getDataAPI() {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get(this._url, {
      headers: header
    });
  }
}
