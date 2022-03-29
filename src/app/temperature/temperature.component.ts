import { Component, EventEmitter, OnInit } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  @Output() clickEvent = new EventEmitter<number>()
  constructor() { }

   
  ngOnInit(): void {
  }
}
