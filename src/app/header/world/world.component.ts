import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  users:any

  showTable=false

  constructor(private userService:UserService) {

   }

  public userDetail(){
    this.showTable=!this.showTable
    this.userService.getData().subscribe(data=>{
    this.users=data;
    });
  }

  ngOnInit(): void {
  }

}
