import { inject, Injectable } from "@angular/core";
import { StorageService } from "./storege.service";

interface Session {
  token: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})

export class AuthStateService {
  private _storageService = inject(StorageService);

  getSession(): Session | null {
    let currentSession: Session | null = null;

    currentSession = this._storageService.get<Session>('token');
    return currentSession;
  }
}
