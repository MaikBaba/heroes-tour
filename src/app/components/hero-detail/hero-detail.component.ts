import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common'

import { Hero } from 'app/classes/hero/hero.class'
import { HeroService } from 'app/services/hero/hero.service'

import 'rxjs/add/operator/switchMap'

@Component({
  selector    : 'hero-detail',
  templateUrl : './hero-detail.component.html',
  styleUrls   : ['./hero-detail.component.css'],
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  hero: Hero

  goBack(): void {
    this.location.back()
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack())
  }

  ngOnInit(): void {
      /*The switchMap operator maps the id in the
      Observable route parameters to a new Observable,
      the result of the HeroService.getHero() method.

      Route parameters are always strings. So
      the route parameter value is converted to a
      number with the JavaScript (+) operator. */
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero)
  }
}
