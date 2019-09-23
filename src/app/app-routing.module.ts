import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'content',
    pathMatch: 'full'
  },
  {
    path: 'content',
    loadChildren: () => import('./container/container.module').then(mod => mod.ContainerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
