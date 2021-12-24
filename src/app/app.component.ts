import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';
  view: number = 0;



  showView(event: { viewType: string }) {

    if (event.viewType === 'recipes')
      this.view = 1;

    if (event.viewType === 'shopping')
      this.view = 2;

    if (event.viewType === 'home')
      this.view = 0;

  }


}
