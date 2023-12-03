import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, skip, take } from 'rxjs';

@Component({
  selector: 'app-skip-operator',
  templateUrl: './skip-operator.component.html',
  styleUrls: ['./skip-operator.component.css']
})
export class SkipOperatorComponent implements OnInit, OnDestroy {
  subs!: Subscription

  ngOnInit(): void {
    this.subs = interval(500)
      .pipe(take(20), skip(30))
      .subscribe({
        next: data => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log('complete')
      })
  }

  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe()
  }
}
