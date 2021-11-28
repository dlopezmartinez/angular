import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('game') event: EventEmitter<any> = new EventEmitter();
  intervalo: any;
  count: number = 0;


  constructor() { }



  ngOnInit(): void {
  }

  onStartGame() {
    this.count = 0;
    console.log('Game starts!!');
    this.intervalo = setInterval(() => {
      this.count++;
      this.event.emit({ data: this.count });
      console.log('Count has been ' + this.count + ' times');
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalo);
    console.log('Stopping the game!!');
  }

}
