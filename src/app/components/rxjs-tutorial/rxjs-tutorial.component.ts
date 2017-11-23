import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import * as Rx from 'rxjs/rx'
import * as jQuery from 'jquery'

@Component({
  selector    : 'rxjs-tutorial',
  templateUrl : './rxjs-tutorial.component.html',
  // styleUrls   : ['./rxjs-tutorial.component.css'],
})

export class RxjsComponent implements OnInit {

  private requestStream: Rx.Observable<string>
  private responseStream: Rx.Observable<{}>
  response: {}

  public constructor() {
    console.log('construcotr called')
    this.requestStream = Rx.Observable.of('https://api.github.com/users')

    this.responseStream = this.requestStream
      .flatMap((requestUrl) => {
         return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
     })

     this.responseStream.subscribe( (response) => {
       this.response = response
     })
  }

  echoResponse = () => {
    console.log(this.response)
  }

  ngOnInit(): void {
  }
}


