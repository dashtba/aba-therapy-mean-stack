import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MandsComponent } from './mands/mands.component';
import { SetupTrialComponent } from './setup-trial/setup-trial.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoadFilesComponent } from './load-files/load-files.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MandsComponent,
    SetupTrialComponent,
    LoadFilesComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
