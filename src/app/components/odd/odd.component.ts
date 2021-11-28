import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {


  @Input('createOdd') create: any;
  num: number;

  constructor(n: number) {
    this.num = n;
  }

  ngOnInit(): void {
  }

}
