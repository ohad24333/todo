import { Component, OnInit } from '@angular/core';
import {  UsersService } from '../servises/users.service';
import { User } from '../User';

@Component({
  selector: 'app-firts',
  templateUrl: './firts.component.html',
  styleUrls: ['./firts.component.css']
})
export class FirtsComponent implements OnInit {

  constructor(private userService : UsersService) { 
    this.user = userService.getUser();
  }

  user:User = {userName:'',userEmail:''};
  
  ngOnInit(): void {
  }

}
