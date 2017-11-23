import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { HeroInMemDataService } from './services/hero-in-mem-data/hero-in-mem-data.service'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'
import { HeroesListComponent } from './components/heroes-list/heroes-list.component'
import { RxjsComponent } from './components/rxjs-tutorial/rxjs-tutorial.component'
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component'
import { AppNavigationComponent} from './components/app-navigation/app-navigation.component'

import { HeroService } from './services/hero/hero.service'

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesListComponent,
    RxjsComponent,
    AppDashboardComponent,
    AppNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(HeroInMemDataService),
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

