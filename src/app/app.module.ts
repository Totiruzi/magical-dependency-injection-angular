import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempLogsComponent } from './components/temp-logs/temp-logs.component';
import { TempRangeComponent } from './components/temp-range/temp-range.component';

@NgModule({
  declarations: [
    AppComponent,
    TempLogsComponent,
    TempRangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
