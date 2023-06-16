import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './dto/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {//httpClient----navigation
    
  }
  public getData():Observable<Users>{
    return this.httpClient.get<Users>("https://jsonplaceholder.typicode.com/posts");

  }
}
