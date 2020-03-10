import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadyComponent } from './ready/ready.component';


const routes: Routes = [
  { path: 'ready', component: ReadyComponent },
  { path: 'ready/:code', component: ReadyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
