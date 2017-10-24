import { Injectable } from '@angular/core';

import { Hero } from 'app/classes/hero/hero.class';
import { HEROES } from 'app/constants/heroes.constants';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then( heroes => heroes.find( hero => hero.id === id ) );
  }
}

