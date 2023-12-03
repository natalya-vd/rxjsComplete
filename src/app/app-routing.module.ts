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
import { TakeWhileOperatorComponent } from './pages/take-while-operator/take-while-operator.component';
import { SkipOperatorComponent } from './pages/skip-operator/skip-operator.component';
import { SkipLastOperatorComponent } from './pages/skip-last-operator/skip-last-operator.component';
import { SkipUntilOperatorComponent } from './pages/skip-until-operator/skip-until-operator.component';
import { SkipWhileOperatorComponent } from './pages/skip-while-operator/skip-while-operator.component';

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
      {path: 'take-while', component: TakeWhileOperatorComponent},
      {path: 'skip', component: SkipOperatorComponent},
      {path: 'skip-last', component: SkipLastOperatorComponent},
      {path: 'skip-until', component: SkipUntilOperatorComponent},
      {path: 'skip-while', component: SkipWhileOperatorComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
