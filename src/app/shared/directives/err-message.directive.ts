import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMessageDirective implements OnInit{

  private _color: string = 'red';
  private _message: string = '*This field is required';
  private _msgFontSize: string = '10px';
  
  public htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set message(value: string) {
    this._message = value;
    this.setMessageFieldRequired();
  }
  //One way to hide the error message, using Style Attribute en css, for biggest apps is better to use a custom if directive
  //view "custom-if.directive.ts" and look at the "showIf" in the html of the add.component.html.
  @Input() set valid(value: boolean) { 
    if (value) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(
    private element: ElementRef<HTMLElement>,
  ) {
  
    this.htmlElement = element;
  }
  
  ngOnInit(): void {
    this.setColor();
    this.setFontSize();
    this.setMessageFieldRequired();
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setFontSize() { 
    this.htmlElement.nativeElement.style.fontSize = this._msgFontSize;
  }

  setMessageFieldRequired() {
    this.htmlElement.nativeElement.innerHTML = this._message;
  }

  hasError(): boolean { 
    return this.htmlElement.nativeElement.innerHTML !== this._message;
  }

}
