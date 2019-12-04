import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private httpClient: HttpClient) {}

  getTemperatureFromApi(city: string){
    // return this.httpClient.get(`https://api.apixu.com/v1/current.json?key=f4e35a8daa12d07c76eae852a2db13f1=${city}`);
    return this.httpClient.get(`http://api.weatherstack.com/current?access_key=f4e35a8daa12d07c76eae852a2db13f1&query=${city}`);
  }
}
