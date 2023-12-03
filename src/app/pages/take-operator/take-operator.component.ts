import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.css']
})
export class TakeOperatorComponent implements OnInit, OnDestroy {
  subs!: Subscription

  ngOnInit(): void {
    this.subs = interval(500)
      .pipe(take(5))
      .subscribe((data) => {
        console.log(data)
      })
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe()
  }
}
