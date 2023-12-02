import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { CancellingObservableComponent } from './components/cancelling-observable/cancelling-observable.component';
import { CreateObservableComponent } from './components/create-observable/create-observable.component';
import { OperatorsBasicsComponent } from './components/operators-basics/operators-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    CancellingObservableComponent,
    CreateObservableComponent,
    OperatorsBasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
