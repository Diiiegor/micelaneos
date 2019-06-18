import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private element: ElementRef) {
    console.log('Directiva llamda');

  }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow')
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null)
  }

  private resaltar(color: string){
    this.element.nativeElement.style.backgroundColor=color;
  }

}
