import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadyComponent } from './ready/ready.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'ready/:code', component: ReadyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
