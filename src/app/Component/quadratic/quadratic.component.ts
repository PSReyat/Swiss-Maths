import { Router } from '@angular/router';
import { Polynomial } from './../../Model/polynomial';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quadratic',
  templateUrl: './quadratic.component.html',
  styleUrls: ['./quadratic.component.css']
})
export class QuadraticComponent implements OnInit {

  disc: number;
  error: string;
  solution1: number;
  solution2: number;
  factor1: number;
  factor2: number;
  a: number;
  b: number;
  c: number;

  solutionDiv: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  discriminant(a: number, b: number, c: number): any{
    
    this.disc = Math.pow(b, 2) - (4 * a * c);

    if(this.disc < 0){
      this.error = "error: discriminant (b^2 - 4ac) is less than zero, therefore no real roots.";
    }

    this.solution1 = Math.round((-b + Math.sqrt(this.disc))/(2 * a) * 1000) / 1000;
    this.solution2 = Math.round((-b - Math.sqrt(this.disc))/(2 * a) * 1000) / 1000;

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
