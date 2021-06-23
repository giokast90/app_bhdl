import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private headers: HttpHeaders;

  constructor(private apiService: ApiService, private auth: AuthService) {
    this.headers = new HttpHeaders({ "Content-Type": "application/json", 'Authorization': `Bearer ${this.auth.getToken()}` });
  }

  getCards(): Observable<any> {
    return this.apiService.get("cards", null, { "headers": this.headers });
  }

  getTransactions(productNumber: string): Observable<any> {
    return this.apiService.get("cards/movements/" + productNumber, null, { "headers": this.headers });
  }

  payCard(payload): Observable<any> {
    return this.apiService.post("cards/payment", payload, { "headers": this.headers });
  }
}
