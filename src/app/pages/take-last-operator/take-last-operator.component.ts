import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last-operator',
  templateUrl: './take-last-operator.component.html',
  styleUrls: ['./take-last-operator.component.css']
})
export class TakeLastOperatorComponent implements OnInit, OnDestroy {
  subs!: Subscription

  ngOnInit(): void {
    this.subs = interval(500)
    .pipe(
      take(10),
      takeLast(5)
    )
    .subscribe(data => {
      console.log(data)
    })
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe()
  }
}
