import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { Route, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'getting-started',
    pathMatch: 'full'
  },

  {
    path: 'getting-started',
    component: ContainerComponent
  },
  {
    path: 'playground',
    loadChildren: () => import('./playground/playground.module').then(mod => mod.PlaygroundModule)
  }
];

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatIconModule
  ]
})
export class ContainerModule { }
