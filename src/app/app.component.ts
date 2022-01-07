import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultSub = "Pro";
  subscriptions = ["Basic", "Advanced", "Pro"];


  onSubmit(form: NgForm): void {
    console.log(form.value);
    console.log(this.defaultSub);
  }
}
