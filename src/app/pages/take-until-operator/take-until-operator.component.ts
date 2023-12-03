import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until-operator',
  templateUrl: './take-until-operator.component.html',
  styleUrls: ['./take-until-operator.component.css']
})
export class TakeUntilOperatorComponent implements OnInit, AfterViewInit, OnDestroy {
  buttonEvent!: Observable<Event>
  subs!: Subscription

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(document.getElementById('takeUntil')!, 'click')
  }

  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe()
  }

  startTimer() {
    this.subs = interval(500)
      .pipe(takeUntil(this.buttonEvent))
      .subscribe(data => console.log(data))
  }
}
