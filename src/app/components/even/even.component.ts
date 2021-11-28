import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input('createEven') create: any;

  num: number;

  constructor(n: number) {
    this.num = n;
  }

  ngOnInit(): void {
  }

}
