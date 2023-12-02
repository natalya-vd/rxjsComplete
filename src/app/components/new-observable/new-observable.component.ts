import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent implements OnInit {
  ngOnInit(): void {
    const newObservable = new Observable<number>(subscribe => {
      for (let i = 0; i < 5; i++) {
        if(i === 4) {
          subscribe.error('unknown error. i value is 4')
        }
        subscribe.next(i)
      }
      subscribe.complete()
    })

    const observer: Partial<Observer<number>> = {
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('complete all done')
    }

    newObservable.subscribe(observer)
  }
}
