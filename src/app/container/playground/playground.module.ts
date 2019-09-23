import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { Route, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatSelectModule, MatTabsModule } from '@angular/material';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'try',
    pathMatch: 'full'
  },
  {
    path: 'try',
    component: PlaygroundComponent
  }
];

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class PlaygroundModule { }
