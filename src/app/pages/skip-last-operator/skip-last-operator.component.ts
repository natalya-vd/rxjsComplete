import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of, skipLast } from 'rxjs';

@Component({
  selector: 'app-skip-last-operator',
  templateUrl: './skip-last-operator.component.html',
  styleUrls: ['./skip-last-operator.component.css']
})
export class SkipLastOperatorComponent implements OnInit, OnDestroy {
  subs!: Subscription

  ngOnInit(): void {
    this.subs = of(1,2,3,4,5)
      .pipe(skipLast(6))
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
