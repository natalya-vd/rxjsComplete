import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, bufferToggle, interval, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-toggle-operator',
  templateUrl: './buffer-toggle-operator.component.html',
  styleUrls: ['./buffer-toggle-operator.component.css']
})
export class BufferToggleOperatorComponent implements OnInit, OnDestroy {
  subs!: Subscription

  ngOnInit(): void {
    const opening = interval(4000).pipe(tap(() => console.log('open')))
    const closing = (data: number) => interval(3000).pipe(tap(() => console.log('close')))
    this.subs = interval(1000)
    .pipe(
      tap((data) => console.log(data)),
      bufferToggle(opening, closing)
    )
    .subscribe(data => console.log(data))
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
