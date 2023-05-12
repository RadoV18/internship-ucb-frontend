import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ResponseDto } from "../dto/response.dto";
import { Observable } from "rxjs";
import { CityDto } from "../dto/city.dto";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<ResponseDto<Array<CityDto>>> {
    return this.http.get<ResponseDto<Array<CityDto>>>(`${environment.API_URL}/api/cities`);
  }
}
