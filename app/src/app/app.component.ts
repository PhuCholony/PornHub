import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StaticModule } from './static/static.module';

@Component({
  standalone: true,
  imports: [RouterOutlet, StaticModule],
  selector: 'phd-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
}
