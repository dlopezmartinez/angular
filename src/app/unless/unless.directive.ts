import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //al utilizar set, unless sigue siendo una propiedad, solo que ejecutará un método cada vez que ésta cambie desde fuera de la directiva, es una especie de watcher de Vuejs
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }


  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
