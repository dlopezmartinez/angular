import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();


  newServerName = 'ServerTest';
  newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput) {
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({ blueprintName: nameInput.value, blueprintContent: this.serverContentInput.nativeElement.value });
  }

}
