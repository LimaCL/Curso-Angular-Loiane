import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer = this._elementRef.nativeElement, 'background-color', 'yellow';*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer = this._elementRef.nativeElement, 'background-color', 'white';*/
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor !: string;
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }

}