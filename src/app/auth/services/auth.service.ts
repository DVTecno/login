import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap} from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { StorageService } from '../../shared/data-access/storege.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient, private _storage: StorageService) {}

  signUp(email: string, password: string): Observable<{ token: string, refreshToken: string }> {
    // Implement your signup logic here
    return this._http.post<{ token: string, refreshToken: string }>(`${environment.API_URL}/api/auth/signup`, { email, password })
    .pipe(tap((response) => {
      this._storage.set('token', response.token);
      this._storage.set('refreshToken', response.refreshToken);
    }));
  }

  logIn(email: string, password: string): Observable<void> {
    // Implement your login logic here
    return this._http.post<void>(`${environment.API_URL}/api/auth/login`, { email, password });
  }
}
