import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppDashboardComponent } from 'app/components/app-dashboard/app-dashboard.component';
import { HeroesListComponent } from 'app/components/heroes-list/heroes-list.component';
import { HeroDetailComponent } from 'app/components/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path      : 'heroes',
    component : HeroesListComponent,
    data      : { title: 'Heroes List' }
  },
  {
    path      : 'dashboard',
    component : AppDashboardComponent,
    data      : { title: 'Dashboard' }
  },
  {
    path      : 'detail/:id',
    component : HeroDetailComponent,
    data      : { title: 'Hero Details' }
  },
  {
    path       : '',
    redirectTo : '/dashboard',
    pathMatch  : 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
