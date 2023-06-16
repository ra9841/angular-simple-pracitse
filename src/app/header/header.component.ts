import { Component, OnInit } from '@angular/core';
import { Users } from '../dto/users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
    userOk:any
    showTable=false
    


  constructor(private httpClient:HttpClient) { 

  }
  public userDetail(){
    this.showTable=!this.showTable;
    let response : Observable<Users>=this.httpClient.get<Users>("https://jsonplaceholder.typicode.com/posts");
    response.subscribe((data:Users)=>{
      
      this.userOk=data;
      
    });
  }
  ngOnInit(): void {
 
    
  }

}
