import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperatorsComponent } from './pages/operators/operators.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './pages/buffer-time-operator/buffer-time-operator.component';
import { BufferToggleOperatorComponent } from './pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './pages/buffer-when-operator/buffer-when-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeUntilOperatorComponent } from './pages/take-until-operator/take-until-operator.component';

const routes: Routes = [
  {
    path: 'operators',
    component: OperatorsComponent,
    children: [
      {path: 'buffer', component: BufferOperatorComponent},
      {path: 'buffer-count', component: BufferCountOperatorComponent},
      {path: 'buffer-time', component: BufferTimeOperatorComponent},
      {path: 'buffer-toggle', component: BufferToggleOperatorComponent},
      {path: 'buffer-when', component: BufferWhenOperatorComponent},
      {path: 'take', component: TakeOperatorComponent},
      {path: 'take-last', component: TakeLastOperatorComponent},
      {path: 'take-until', component: TakeUntilOperatorComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
