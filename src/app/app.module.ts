import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // Add this

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,  // Required for *ngFor
    AppRoutingModule,
    HttpClientModule  // Required to fetch JSON data
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
