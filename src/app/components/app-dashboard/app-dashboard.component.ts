import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/classes/hero/hero.class';
import { HeroService } from 'app/services/hero/hero.service';

@Component({
  selector    : 'app-dashboard',
  templateUrl : './app-dashboard.component.html',
  styleUrls   : ['./app-dashboard.component.css'],
})

export class AppDashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
