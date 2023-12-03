import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while-operator',
  templateUrl: './take-while-operator.component.html',
  styleUrls: ['./take-while-operator.component.css']
})
export class TakeWhileOperatorComponent implements OnInit, OnDestroy {
  subs!: Subscription

  ngOnInit(): void {
    this.subs = interval(500)
      .pipe(takeWhile((x) => x < 4))
      .subscribe(data => console.log(data))
  }

  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe()
  }
}
