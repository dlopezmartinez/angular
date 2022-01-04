import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


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

        if (count == 2) {
          observer.complete(); // se completa el observable
        }

        observer.next(count) //emitimos un evento

        if (count > 3) {
          observer.error(new Error('Count is greater than 3')) //arrojamos un error, cuando arrojamos un error, el observable se "cancela", pero no se completa.
        }
        count++;
      }, 1000)
    })


    //cuidado con el método map ya que se importa también de otra libreria y da conflictos.

    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => {
      return data > 0; //solo devuelve cuando data > 0 
    }),
      map((data: number) => {
        return 'Round : ' + (data + 1);
      })
    ).subscribe((data) => {
      console.log(data); //recogemos los eventos del observable
    }, error => {
      alert(error) //recogemos el error que arroja el observable
    }, () => {
      alert('Observable completed!'); //recogemos el "completado" del observable.
    })






  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
