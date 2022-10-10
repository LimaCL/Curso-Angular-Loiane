import { Directive, HostBinding, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';


  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer = this._elementRef.nativeElement, 'background-color', 'yellow';*/
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer = this._elementRef.nativeElement, 'background-color', 'white';*/
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor !: string;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    
    this.backgroundColor = this.defaultColor

  }
}
