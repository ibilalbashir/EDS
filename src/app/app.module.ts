import { MatGridListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    RouterModule.forRoot(routes),
    MatGridListModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
