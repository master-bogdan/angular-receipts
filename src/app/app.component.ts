import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedFeature: 'recipe' | 'shopping-list' = 'recipe';

  onNavigate(feature: 'recipe' | 'shopping-list'): void {
    this.loadedFeature = feature;
  }
}
