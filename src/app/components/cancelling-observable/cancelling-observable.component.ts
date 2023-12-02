import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  templateUrl: './cancelling-observable.component.html',
  styleUrls: ['./cancelling-observable.component.css']
})
export class CancellingObservableComponent implements OnInit {
  timerConsoleSubs!: Subscription
  timerBrowserSubs!: Subscription
  timers: number[] = []

  ngOnInit(): void {
    const newObservable = new Observable<number>((subscribe) => {
      let i = 0
      const interval = setInterval(() => {
        console.log('Interval executing')
        subscribe.next(i++)

        if(i === 6) {
          subscribe.error('unknown error occurred')
        }
      }, 1000)

      // Для очистки чего-то (например, таймера) при ошибке или отмене подписки
      return () => {
        console.log('called when observer is unsubscribed')
        clearInterval(interval)
      }
    })

    this.timerConsoleSubs = newObservable.subscribe((data) => console.log(new Date().toLocaleTimeString() + ' ' + data))

    this.timerBrowserSubs = newObservable.subscribe((data) => {
      this.timers.push(data)
    })

    // Добавить/удалить одну подписку в другую
    // Тогда при timerConsoleSubs отмене будет отменено и timerBrowserSubs (но timerBrowserSubs может недополучить последние данные)
    // this.timerConsoleSubs.add(this.timerBrowserSubs)
    // this.timerConsoleSubs.remove(this.timerBrowserSubs)
  }

  cancelTimer() {
    console.log('cancel the observable')
    this.timerConsoleSubs.unsubscribe()
    this.timerBrowserSubs.unsubscribe()
  }
}
