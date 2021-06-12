import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DICalculusComponent } from './Component/dicalculus/dicalculus.component';
import { QuadraticComponent } from './Component/quadratic/quadratic.component';
import { BinomialComponent } from './Component/binomial/binomial.component';

@NgModule({
  declarations: [
    AppComponent,
    DICalculusComponent,
    QuadraticComponent,
    BinomialComponent
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
