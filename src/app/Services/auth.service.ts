import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // Signup data
  signUp(logData: any) {
    return this.http.post<any>('http://localhost:3000/signUp', logData);
  }
}
