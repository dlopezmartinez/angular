import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    //con private crea una variable para ésta clase automaticamente
    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}