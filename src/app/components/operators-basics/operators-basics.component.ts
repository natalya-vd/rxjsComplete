import { Component, OnInit } from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-operators-basics',
  templateUrl: './operators-basics.component.html',
  styleUrls: ['./operators-basics.component.css']
})
export class OperatorsBasicsComponent implements OnInit {
  ngOnInit(): void {
    const newObservable = interval(1000)

    const observablePipe = newObservable.pipe(
      filter((data) => data % 2 === 0),
      map((number) => 'Event number pipe: ' + number)
    )

    newObservable.subscribe(data => {
      if(data % 2 === 0) {
        console.log('Event number: ' + data)
      }
    })

    observablePipe.subscribe(data => {
      console.log(data)
    })
  }
}
