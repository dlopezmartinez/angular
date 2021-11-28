import { Content } from '@angular/compiler/src/render3/r3_ast';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };

  @Input() name: string;

  @ViewChild('heading', { static: true }) header: ElementRef;

  @ContentChild('contentP', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('TextContent : ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph : ' + this.paragraph.nativeElement.textContent);
  }


  ngDoCheck() {
    console.log('Docheck called!!!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContent called!!!');
    console.log('Text Content of paragraph : ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!!!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!!!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!!!');
    console.log('TextContent : ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('onDestroy called!!!');
  }

}
