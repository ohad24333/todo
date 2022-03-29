import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-childe',
  templateUrl: './childe.component.html',
  styleUrls: ['./childe.component.css']
})
export class ChildeComponent implements OnInit {

  constructor() { }

  @Input() item = 0
  ngOnInit(): void {
  }

}
