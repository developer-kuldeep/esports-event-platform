import { Component } from '@angular/core';
import { LayoutComponent } from './shared/components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: `<app-layout/>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'core-app';
}
