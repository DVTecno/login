import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private _storege = localStorage;

  get<T>(key: string): T | null {
    const value = this._storege.getItem(key);
    if(!value) {
      return null;
    }
    return JSON.parse(value) as T;
  }

  set(key: string, value: string): void {
    this._storege.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    this._storege.removeItem(key);
  }
}
