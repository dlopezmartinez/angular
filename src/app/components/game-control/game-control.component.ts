import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('gameEvent') event: EventEmitter<any> = new EventEmitter();
  intervalo: any;
  count: number = 0;

  @Output('gameStopped') stopEvent = new EventEmitter();

  constructor() { }



  ngOnInit(): void {
  }

  onStartGame() {
    this.count = 0;
    console.log('Game starts!!');
    this.intervalo = setInterval(() => {
      this.count++;
      this.event.emit({ data: this.count });
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalo);
    this.stopEvent.emit();
    console.log('Stopping the game!!');
  }

}
