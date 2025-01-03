import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private _storage = typeof localStorage !== 'undefined' ? localStorage : null;

  get<T>(key: string): T | null {
    if (!this._storage) return null;
    const value = this._storage.getItem(key);

    if (!value) return null;

    return JSON.parse(value) as T;
  }
  set(key: string, value: string) {
    if (this._storage) {
      this._storage.setItem(key, value);
    }
  }

  remove(key: string) {
    if (this._storage) {
      this._storage.removeItem(key);
    }
  }
}

