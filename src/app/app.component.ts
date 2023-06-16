import { Component } from '@angular/core';
import { User } from './dto/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User={
    "id":1,
    "name":"rabin",
    "email":"rabin@gmail.com",
    "password":123
    
  }
  title = 'simplePractiseDelete';
  what(name:String,email:String,password:number){

    this.user.name=name
    this.user.email=email
    this.user.password=password
  }

  message:any;

  clearMessage(){
    this.message="";
  }

  welcome(){
    if("rabin"==this.user.name && 123==this.user.password){
      this.message="username and password is correct";
    }else{
      this.message="incorrect!!!!!!!!!!"
    }
  }
}
