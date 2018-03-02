import {Routes} from '@angular/router';

import {HomeComponent} from './home';
import {ShopComponent} from './shop';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  }
];
