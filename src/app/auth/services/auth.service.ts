import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap} from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import  {StorageService}  from '../../shared/data-access/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private session: { token: string, refreshToken: string } | null = null;
  private _http = inject(HttpClient);
  private _storage = inject(StorageService);

  signUp(email: string, password: string): Observable<{ token: string, refreshToken: string }> {
    return this._http.post<{ token: string, refreshToken: string }>(`${environment.API_URL}/api/auth/signup`, { email, password })
    .pipe(tap((response) => {
      this.session = {
        token: response.token,
        refreshToken: response.refreshToken
      };
      this._storage.set('session', JSON.stringify(this.session));
    }));
  }

  logIn(email: string, password: string): Observable<{ token: string, refreshToken: string }> {
    return this._http.post<{ token: string, refreshToken: string }>(`${environment.API_URL}/api/auth/login`, { email, password })
    .pipe(tap((response) => {
      this.session = {
        token: response.token,
        refreshToken: response.refreshToken
      };
      this._storage.set('session', JSON.stringify(this.session));
    }));
  }
}
