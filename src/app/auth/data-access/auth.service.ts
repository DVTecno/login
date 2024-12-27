import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export default class AuthService {
  constructor(private _http: HttpClient) {}
  signUp(email: string, password: string) :Observable<any> {
    return this._http.post(`${environment.API_URL}/users`, {
      email,
       password
      });
  }
  logIn() {
    console.log('logIn');
  }
}
