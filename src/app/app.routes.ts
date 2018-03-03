import {Routes} from '@angular/router';

// import {HomeComponent} from './user';
import {UserComponent, RoleComponent, RoleUserComponent} from './sys';
import {ShopComponent} from './shop';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'role',
    component: RoleComponent,
  },
  {
    path: 'roleUser/:id',
    component: RoleUserComponent,
  }
];
