import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: String;

  constructor(private _http: HttpClient, private urlService: UrlService) {
    this.url = this.urlService.SERVER_URL;
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
    return this._http.get(this.url + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this._http.post(this.url + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this._http.put(this.url + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any): any {
    return this._http.delete(this.url + endpoint, reqOpts);
  }
}
