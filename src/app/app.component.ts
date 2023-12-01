import { AfterViewInit, Component } from '@angular/core';
import {from, fromEvent} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'rxjsComplete';

  postsArray = [
    {title: 'Jon', description: 'description 1'},
    {title: 'Jon 2', description: 'description 2'},
    {title: 'Jon 3', description: 'description 3'},
  ]

  postsArray$ = from(this.postsArray)

  promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolve the promise sending data')
    }, 3000)
  })

  promise$ = from(this.promise)

  constructor() {
    this.postsArray$.subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('Completed')
      }
    })

    this.promise$.subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('Completed promise')
      }
    })
  }

  ngAfterViewInit(): void {
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('Completed click')
      }
    })
  }
}
