import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.httpClient.get<any>(
      'https://cnam-tp05-gallier-benjamin.onrender.com/api/user'
    );
  }

  public GetCatalogue(): Observable<any> {
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
