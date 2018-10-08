import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MandsComponent} from './mands/mands.component';
import {SetupTrialComponent} from './setup-trial/setup-trial.component';
const routes: Routes = [
  { path: 'mands', component: MandsComponent },
  { path: 'setup-trial', component: SetupTrialComponent },
];
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
