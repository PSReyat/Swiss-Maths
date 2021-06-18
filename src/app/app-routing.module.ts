import { BinomialComponent } from './Component/binomial/binomial.component';
import { IntegrateComponent } from './Component/integrate/integrate.component';
import { DifferentiateComponent } from './Component/differentiate/differentiate.component';
import { QuadraticComponent } from './Component/quadratic/quadratic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", component: QuadraticComponent},
  {path: "quadratic", component: QuadraticComponent},
  {path: "differentiate", component: DifferentiateComponent},
  {path: "integrate", component: IntegrateComponent},
  {path: "binomial", component: BinomialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
