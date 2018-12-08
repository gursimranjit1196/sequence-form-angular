import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'company',
        loadChildren: './modules/company/company.module#CompanyModule'
      },
      {
        path: 'fsa',
        loadChildren: './modules/fsa/fsa.module#FsaModule'
      },
      {
        path: 'hsa',
        loadChildren: './modules/hsa/hsa.module#HsaModule'
      }
    ]
  }  
];