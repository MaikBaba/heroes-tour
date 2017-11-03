/**
 * This is an example of a Hero-oriented InMemoryDbService.
 *
 * For demonstration purposes, it can return the database
 * synchronously as an object (default),
 * as an observable, or as a promise.
 *
 * Add the following line to `AppModule.imports`
 *   InMemoryWebApiModule.forRoot(HeroInMemDataService) // or HeroInMemDataOverrideService
 */
import { Injectable } from '@angular/core'
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'

// tslint:disable:no-unused-variable
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/delay'
// tslint:enable:no-unused-variable
@Injectable()
export class HeroInMemDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {

    const heroes = [
      { id: 10,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]

    // default returnType
    let returnType  = 'object'
    // let returnType  = 'observable';
    // let returnType  = 'promise';

    // demonstrate POST commands/resetDb
    // this example clears the collections if the request body tells it to do so
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {}
      if (body.clear === true) {
        heroes.length = 0
      }

      // 'returnType` can be 'object' | 'observable' | 'promise'
      returnType = body.returnType || 'object'
    }
    const db = { heroes }

    switch (returnType) {
      case ('observable'):
        return of(db).delay(10)
      case ('promise'):
        return new Promise(resolve => {
          setTimeout(() => resolve(db), 10)
        })
      default:
        return db
    }
  }
}
