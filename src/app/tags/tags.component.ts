import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Tag } from './Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor() { }

  @Input() tag :Tag = {content:"",class:""};
  ngOnInit(): void {
  }

}
