import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey ='0798e792b8msh60105b97dea771ap105154jsn35eb14fc223d';
  private apiUrl ='https://weather-api99.p.rapidapi.com/weather';

  constructor(private http: HttpClient) { }



  searchWeatherByCity(city:string): Observable<any>{

    const headers = new HttpHeaders()
    .set("X-RapidAPI-Key", this.apiKey)
    .set("X-RapidAPI-Host", "weather-api99.p.rapidapi.com");

    const params = new HttpParams().set('city', city);

    const options ={headers, params};
    
    return this.http.get(this.apiUrl, options);

  }
}
