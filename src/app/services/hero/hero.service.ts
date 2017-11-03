import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


import { Hero } from 'app/classes/hero/hero.class'

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes'  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'})
  constructor(private http: Http) { }

  getHeroes (): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then( response => response.json() )
      .catch( this.handleError )
  }

  // This get-by-id will 404 when id not found
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get(url)
      .toPromise()
      .then( response => response.json() )
      .catch( this.handleError )
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then( () => hero )
      .catch( this.handleError )
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error) // for demo purposes only
    return Promise.reject(error.message || error)
  }

}

