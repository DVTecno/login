import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  signUp(email: string, password: string): Observable<void> {
    // Implement your signup logic here
    return this._http.post<void>(`${environment.API_URL}/api/auth/signup`, { email, password });
  }
}
