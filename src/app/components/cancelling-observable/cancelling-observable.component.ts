import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  templateUrl: './cancelling-observable.component.html',
  styleUrls: ['./cancelling-observable.component.css']
})
export class CancellingObservableComponent implements OnInit {
  timerSubs!: Subscription

  ngOnInit(): void {
    const newObservable = interval(1000)

    this.timerSubs = newObservable.subscribe((data) => console.log(new Date().toLocaleTimeString() + ' ' + data))
  }

  cancelTimer() {
    console.log('cancel the observable')
    this.timerSubs.unsubscribe()
  }
}
