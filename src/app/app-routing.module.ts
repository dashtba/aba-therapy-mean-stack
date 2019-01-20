import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MandsComponent} from './mands/mands.component';
import {SetupTrialComponent} from './setup-trial/setup-trial.component';
import {LoadFilesComponent} from './load-files/load-files.component';

const routes: Routes = [
  { path: 'mands', component: MandsComponent },
  { path: 'setup-trial', component: SetupTrialComponent },
  { path: 'load-files', component: LoadFilesComponent },
];
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
