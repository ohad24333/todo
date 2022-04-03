import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  user : User = {userName :'' , userEmail:''};

  constructor() {
    let item = localStorage.getItem("user");
    if(item != null){
      this.user = JSON.parse(item);
      console.log(this.user)
    }
   }

   getUser(){
     return this.user;
   }
}
