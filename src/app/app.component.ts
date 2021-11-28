import { Component, Input, OnChanges } from '@angular/core';
import { EvenComponent } from './components/even/even.component';
import { OddComponent } from './components/odd/odd.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {


  @Input('game') gameEvent: number;

  arrayOdds: OddComponent[] = [];
  arrayEvens: EvenComponent[] = [];


  ngOnChanges() {
    console.log(this.gameEvent);
    this.checkGameEvent();
  }

  checkGameEvent() {
    if (this.gameEvent % 2 == 0) {
      this.arrayOdds.push(new OddComponent(this.gameEvent));
    } else {
      this.arrayEvens.push(new EvenComponent(this.gameEvent));
    }
  }


}
