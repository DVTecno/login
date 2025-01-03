import { inject, Injectable } from "@angular/core";
import StorageService from "./storage.service";

interface Session {
  token: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})

export class AuthStateService {
  private _storageService = inject(StorageService);

  signOut() {
    this._storageService.remove('token');
    this._storageService.remove('refreshToken');
  }

  getSession(): Session | null {
    let currentSession: Session | null = null;

    currentSession = this._storageService.get<Session>('token');

    if (!this._isValidSession(currentSession)) {
      this.signOut();
      currentSession = null;
    }
    return currentSession;
  }

  private _isValidSession(maybeSession: unknown): boolean {
    if (
      typeof maybeSession === 'object' &&
      maybeSession !== null &&
      'token' in maybeSession &&
      'refreshToken' in maybeSession
    ) {
      const token = (maybeSession as Session).token;
      return this._isTokenValid(token);
    }
    return false;
  }

  private _isTokenValid(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const now = Math.floor(Date.now() / 1000);
      return payload.exp > now;
    } catch {
      return false;
    }
  }

}
