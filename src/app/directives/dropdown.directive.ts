import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropDown',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event): void {
    this.isOpen = this.elRef.nativeElement.contains(event.target as Node) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef<HTMLElement>) {}
}
