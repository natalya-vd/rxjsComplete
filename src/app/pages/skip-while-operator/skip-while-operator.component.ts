import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, skipWhile, take } from 'rxjs';

@Component({
  selector: 'app-skip-while-operator',
  templateUrl: './skip-while-operator.component.html',
  styleUrls: ['./skip-while-operator.component.css']
})
export class SkipWhileOperatorComponent implements OnInit, OnDestroy {
  subs!: Subscription

  ngOnInit(): void {
    this.subs = interval(500)
      .pipe(take(20), skipWhile((x) => x < 4))
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log('complete')
      })
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }
}
