import { Route } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WatchComponent } from './pages/watch/watch.component';
import { AboutComponent } from './pages/about/about.component';

import { watchGuard } from './guards/watch.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'watch',
    canActivate: [watchGuard],
    component: WatchComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
