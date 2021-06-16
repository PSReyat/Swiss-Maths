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

  solutionDiv: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  discriminant(a: number, b: number, c: number): any{
    
    this.disc = Math.pow(b, 2) - (4 * a * c);

    if(this.disc < 0){
      this.disc = "error: no real roots.";
      return this.disc;
    }

    this.solution1 = (-b + Math.sqrt(this.disc))/(2 * a);
    this.solution2 = (-b - Math.sqrt(this.disc))/(2 * a);

    if(this.solution1 < 0 && this.solution2 > 0){
      this.factor1 = (-1) * this.solution1;
      this.factor2 = this.solution2;
    }else if(this.solution1 > 0 && this.solution2 < 0){
      this.factor1 = this.solution1;
      this.factor2 = (-1) * this.solution2;
    }else if(this.solution1 < 0 && this.solution2 < 0){
      this.factor1 = (-1) * this.solution1;
      this.factor2 = (-1) * this.solution2;
    }else{
      this.factor1 = this.solution1;
      this.factor2 = this.solution2;
    }

  }

  showSolutions(){
    this.solutionDiv = true;
  }

}
