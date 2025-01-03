import { inject, Injectable } from "@angular/core";
import  {StorageService}  from "./storage.service";

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
    this._storageService.remove('session');
  }

  getSession(): Session | null {
    let currentSession: Session | null = null;

    currentSession = this._storageService.get<Session>('session');

    if (!this._isValidSession(currentSession)) {
      this.signOut();
      currentSession = null;
    }
    return currentSession;
  }

  private _isValidSession(maybeSession: unknown): boolean {
    return (
      typeof maybeSession === 'object' &&
      maybeSession !== null &&
      'session' in maybeSession
    );
  }
}
