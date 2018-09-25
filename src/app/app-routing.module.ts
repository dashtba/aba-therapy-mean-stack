import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MandsComponent} from './mands/mands.component';

const routes: Routes = [
  { path: 'mands', component: MandsComponent },
];
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
