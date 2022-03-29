import { Component } from '@angular/core';
import { Tag } from './tags/Tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  tagsArr: Tag[] = [];
  temp: number = 0;

  constructor() {
    this.fillTags();
  }

  fillTags() {

    this.tagsArr.push({ content: "Tesla", class: "danger" })
    this.tagsArr.push({ content: "Subaro", class: "Success" })
    this.tagsArr.push({ content: "Mazda", class: "Info" })

  }
  

  handlePlaceNumber(temp:number){
    this.temp = temp;
    
  }
}

