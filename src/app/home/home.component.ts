import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { timeout } from 'rxjs-compat/operator/timeout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription; //almacenando aquí nuestro observable podemos conseguir desubscribirnos en onDestroy para evitar fugas de memoria.

  constructor() { }

  ngOnInit() {

    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // }) //lanza un evento cada segundo
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count)
        count++;
      }, 1000)
    })

    this.firstObsSubscription = customIntervalObservable.subscribe((data) => {
      console.log(data);
    })

  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
