import { Polynomial } from './../../Model/polynomial';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quadratic',
  templateUrl: './quadratic.component.html',
  styleUrls: ['./quadratic.component.css']
})
export class QuadraticComponent implements OnInit {

  disc: number | string;
  solution1: number;
  solution2: number;
  factor1: number;
  factor2: number;
  a: number;
  b: number;
  c: number;

  constructor() { }

  ngOnInit(): void {

  }

  discriminant(a: number, b: number, c: number): any{
    
    this.disc = Math.pow(b, 2) - (4 * a * c);

    if(this.disc < 0){
      this.disc = "error: no real roots.";
      return this.disc;
    }

    this.solution1 = (b + Math.sqrt(this.disc))/(2 * a);
    console.log((b + Math.sqrt(this.disc)));
    console.log(Math.sqrt(this.disc) + " b: " + b + " a: " + a);
    this.solution2 = (b - Math.sqrt(this.disc))/(2 * a);
    console.log(this.solution2);

    this.factor1 = (-1) * this.solution1;
    this.factor2 = (-1) * this.solution2;

  }

}
