import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api_httpInterceptor } from '../Class/Api_httpInterceptor';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService {
  constructor(private httpClient: HttpClient) {}

  public login(login: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('login', login);
    formData.append('pass', password);
    return this.httpClient.post<any>(
      'https://cnam-tp05-gallier-benjamin.onrender.com/api/login',
      formData
    );
  }

  public GetUsers(): Observable<any> {
    //Api_httpInterceptor.jwtToken="eyJhbGciOiJIUzI1NiJ9.e30.ECFeffV1yM9iD8t7d3YA_xytwbz8QS-DoG0-KtKnYQo";
    return this.httpClient.get<any>(
      'https://cnam-tp05-gallier-benjamin.onrender.com/api/user'
    );
  }

  public GetCatalogue(): Observable<any> {
    //Api_httpInterceptor.jwtToken="eyJhbGciOiJIUzI1NiJ9.e30.ECFeffV1yM9iD8t7d3YA_xytwbz8QS-DoG0-KtKnYQo";
    return this.httpClient.get<any>(
      `https://cnam-tp05-gallier-benjamin.onrender.com/api/catalogue`
    );
  }

  public Hello(name: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://cnam-tp05-gallier-benjamin.onrender.com/api/hello/${name}`
    );
  }
}
