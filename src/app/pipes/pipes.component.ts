import { Component, OnInit } from '@angular/core';
import { BtcusdPipe } from './btcusd.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  furniture = {
    name : "table",
    description : "big brown table",
    bayingDate: new Date('2022,3,30'),
    cost : 554.34534,
    plasticPerc : 0.24

  }

  ngOnInit(): void {
  }

}
