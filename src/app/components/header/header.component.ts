import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<'recipe' | 'shopping-list'>();

  onSelect(feature: 'recipe' | 'shopping-list'): void {
    this.featureSelected.emit(feature);
  }
}
