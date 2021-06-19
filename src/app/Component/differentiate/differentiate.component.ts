import { Polynomial } from './../../Model/polynomial';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-differentiate',
  templateUrl: './differentiate.component.html',
  styleUrls: ['./differentiate.component.css']
})
export class DifferentiateComponent implements OnInit {

  polynomial: Polynomial;
  poly: string;

  constructor() { }

  ngOnInit(): void {
    this.polynomial = new Polynomial();
  }

  readPolynomial(poly: string){
    this.poly = poly;
    this.polynomial.set(this.poly.trim());
    
  }

}
