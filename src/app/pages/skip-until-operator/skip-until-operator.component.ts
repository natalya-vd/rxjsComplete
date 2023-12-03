import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, skipUntil } from 'rxjs';

@Component({
  selector: 'app-skip-until-operator',
  templateUrl: './skip-until-operator.component.html',
  styleUrls: ['./skip-until-operator.component.css']
})
export class SkipUntilOperatorComponent implements AfterViewInit, OnDestroy {
  subs!: Subscription
  buttonEvent!: Observable<Event>

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(document.getElementById('showUntil')!, 'click')

    this.subs = interval(500)
      .pipe(skipUntil(this.buttonEvent))
      .subscribe(data => console.log(data))
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }
}
