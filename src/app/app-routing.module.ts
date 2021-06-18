import { DifferentiateComponent } from './Component/differentiate/differentiate.component';
import { QuadraticComponent } from './Component/quadratic/quadratic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "/quadratic", component: QuadraticComponent},
  {path: "/differentiate", component: DifferentiateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
