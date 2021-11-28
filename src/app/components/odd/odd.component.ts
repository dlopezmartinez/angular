import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {


  @Input('createOdd') created: {
    type: string,
    data: number,
  };


  ngOnInit(): void {
  }

}
