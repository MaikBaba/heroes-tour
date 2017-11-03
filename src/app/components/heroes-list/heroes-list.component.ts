import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Hero } from 'app/classes/hero/hero.class'
import { HeroService } from 'app/services/hero/hero.service'

@Component({
  selector    : 'heroes-list',
  templateUrl : './heroes-list.component.html',
  styleUrls   : ['./heroes-list.component.css'],
  providers   : [HeroService],
})

export class HeroesListComponent implements OnInit {
  // variables
  heroes: Hero[] = []
  selectedHero: Hero = null

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  // memberVariables
  getHeroes(): void {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes as Hero[] )
  }

  // functions
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  ngOnInit(): void {
    this.getHeroes()
  }
}
