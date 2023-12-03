import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, bufferWhen, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-when-operator',
  templateUrl: './buffer-when-operator.component.html',
  styleUrls: ['./buffer-when-operator.component.css']
})
export class BufferWhenOperatorComponent implements OnInit, OnDestroy {
  subs!: Subscription
  ngOnInit(): void {
    this.subs = interval(500)
    .pipe(bufferWhen(() => interval(2000)))
    .subscribe((data) => {
      console.log(data)
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
