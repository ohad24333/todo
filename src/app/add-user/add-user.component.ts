import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  user ={};

  ngOnInit(): void {
    let uuu = localStorage.getItem('user');
    console.log(uuu);
  }


  handleAddUserSubmit(data:NgForm){

    this.user = data.value;
    let userStr = JSON.stringify(this.user);
    localStorage.setItem( 'user' ,userStr);
    let uuu = localStorage.getItem('user');
    console.log(uuu);
  }
}
