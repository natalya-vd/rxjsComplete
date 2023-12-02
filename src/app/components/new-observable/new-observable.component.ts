import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Observer4 } from 'src/app/services/observer4';

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
      next: (data) => console.log('observer 1 ' + data),
      error: (err) => console.log('observer 1 ' + err),
      complete: () => console.log('complete 1 all done')
    }

    newObservable.subscribe(observer)

    newObservable.subscribe({
      next: (data) => console.log('observer 2 ' + data),
      error: (err) => console.log('observer 2 ' + err),
      complete: () => console.log('complete 2 all done')
    })

    // deprecated
    newObservable.subscribe(
      (data) => console.log('observer 3 ' + data),
      (err) => console.log('observer 3 ' + err),
      () => console.log('complete 3 all done')
    )

    // Часто используется такой вид подписки. Но если Observable выдаст ошибку, то она не будет обработана
    // newObservable.subscribe((data) => console.log('observer 3.1 ' + data))

    newObservable.subscribe(new Observer4())
  }
}
