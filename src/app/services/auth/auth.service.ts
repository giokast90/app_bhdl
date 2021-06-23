import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers: HttpHeaders;

  constructor(private apiService: ApiService) {
    this.headers = new HttpHeaders({ "Content-Type": "application/json" });
  }

  login(user): Observable<any> {
    return this.apiService.post("login", user, { "headers": this.headers });
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  logout(): boolean {
    localStorage.removeItem("token");
    return true;
  }

  getToken(): string {
    let token = localStorage.getItem("token");
    return token;
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;
  }
}
