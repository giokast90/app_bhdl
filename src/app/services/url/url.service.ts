import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  SERVER_URL = "https://bhdleon-interview-test.herokuapp.com/";

  constructor() { }
}
