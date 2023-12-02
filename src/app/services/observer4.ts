import { Observer } from "rxjs"

export class Observer4 implements Observer<number> {
  next(data: number) {
    console.log('Observer4 ' + data)
  }

  error(err: string) {
    console.log('Observer4 ' + err)
  }

  complete() {
    console.log('complete Observer4')
  }
}
