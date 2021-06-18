import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuadraticComponent } from './Component/quadratic/quadratic.component';
import { BinomialComponent } from './Component/binomial/binomial.component';
import { DifferentiateComponent } from './Component/differentiate/differentiate.component';
import { IntegrateComponent } from './Component/integrate/integrate.component';

@NgModule({
  declarations: [
    AppComponent,
    QuadraticComponent,
    BinomialComponent,
    DifferentiateComponent,
    IntegrateComponent
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
