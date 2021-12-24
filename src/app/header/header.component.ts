import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('viewSelect') viewSelect = new EventEmitter<{ viewType: string }>();


  constructor() { }

  ngOnInit(): void {
  }

  onClickView(type: string) {
    this.viewSelect.emit({ viewType: type });
  }

}
