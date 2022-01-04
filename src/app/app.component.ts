import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userActivated = false;


  constructor(private userS: UserService) { }



  ngOnInit() {
    this.userS.activatedEmitter.subscribe((didActivate) => {
      this.userActivated = didActivate;
    });
  }
}
