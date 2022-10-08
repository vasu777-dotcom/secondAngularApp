import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private httpClient:HttpClient) { }

  getHelloContent(){
    return this.httpClient.get('http://localhost:8080/hi/springResp1');
  }
}
