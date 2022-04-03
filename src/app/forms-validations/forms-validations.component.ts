import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-validations',
  templateUrl: './forms-validations.component.html',
  styleUrls: ['./forms-validations.component.css']
})
export class FormsValidationsComponent implements OnInit {

  constructor() { }

  isValidForm = false;
  ngOnInit(): void {
  }

  handleSubmit(form:any){

    this.isValidForm = !form.valid;
  }
}
