import { Component, OnInit } from '@angular/core';
import {  UsersService } from '../servises/users.service';
import { User } from '../User';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private userService : UsersService) {
    this.user = userService.getUser();
   }

  user :User = {userName:'',userEmail:''};

  ngOnInit(): void {
  }

}
