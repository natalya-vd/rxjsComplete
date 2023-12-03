import { AfterViewInit, Component } from '@angular/core';
import { Observable, buffer, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.css']
})
export class BufferOperatorComponent implements AfterViewInit {
  intervalData: number[] = []
  showData$!: Observable<Event>

  ngAfterViewInit(): void {
    this.showData$ = fromEvent(document.getElementById('showButton')!, 'click')
  }

  startInterval() {
    interval(1000)
    .pipe(buffer(this.showData$))
    .subscribe((data) => {
      this.intervalData.push(...data)
    })
  }
}
