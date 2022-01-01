import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubs: Subscription;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name']; //params a diferencia de snapshot está hecho a base de Observables, lo que nos permite reaccionar a cambios en la ruta. Las subscripciones que hagamos a un observable no se borran a diferencia de los componentes.
        }
      );
  }


  ngOnDestroy(): void {
    this.paramsSubs.unsubscribe(); //no es necesario realizar ésto ya que no afecta al rendimiento de nuestra app, pero en caso de que queramos desubscribirnos cuando el componente es destruído, ésta sería la manera.
  }


}

