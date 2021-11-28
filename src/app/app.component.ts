import { Component, Input, OnChanges } from '@angular/core';
import { EvenComponent } from './components/even/even.component';
import { OddComponent } from './components/odd/odd.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  arrayOdds: { type: string, data: number }[] = [];
  arrayEvens: { type: string, data: number }[] = [];

  checkGameEvent(gameEvent: {
    type: string,
    data: number
  }) {
    if (gameEvent.data % 2 === 0) {
      console.log('Añadiendo Odd');
      console.log(this.arrayOdds);
      this.arrayOdds.push({ type: 'Odd', data: gameEvent.data });
    } else {
      console.log('Añadiendo Even');
      this.arrayEvens.push({ type: 'Even', data: gameEvent.data });
    }
  }

  stopGameEvent() {
    this.arrayOdds = [];
    this.arrayEvens = [];
  }


}
