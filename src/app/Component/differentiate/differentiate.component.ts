import { Polynomial } from './../../Model/polynomial';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { ParsedEvent } from '@angular/compiler';

@Component({
  selector: 'app-differentiate',
  templateUrl: './differentiate.component.html',
  styleUrls: ['./differentiate.component.css']
})
export class DifferentiateComponent implements OnInit {

  polynomial: Polynomial;
  poly: string;
  differential: string;

  constructor() { }

  ngOnInit(): void {
    this.polynomial = new Polynomial();
  }

  differentiate(poly: string){
    let x = 0;
    let y = 0;
    let term: string;
    let length: number = this.polynomial.getParsed().size;
    
    for(let i = 0; i < length; i++){

      term = this.polynomial.getParsed().get(i);

      for(let j = 0; j < term.length; j++){

        if(!term.charAt(0).match(/[a-z]/) || term.charAt(0) === "x"){
          x = parseInt(term.charAt(0));
        }

        if(!term.charAt(term.length - 1).match(/[a-z]/) || term.charAt(0) === "x"){
          y = parseInt(term.charAt(term.length - 1));
        }

        y = y - 1;
        x = x * y;

        this.differential = x.toString() + "x^" + y.toString();

      }

    }

  }

  parseEquation(poly: string){

    this.poly = this.normalisePoly(poly);
    let subString: string = "";

    for(let i = 0; i < this.poly.length; i++){

      if(this.poly.charAt(i) !== "+"){
        subString += this.poly.charAt(i);
      }
      
      if(this.poly.charAt(i) === "+" || this.poly.charAt(i) === this.poly.charAt(this.poly.length - 1)){
        this.polynomial.setParsed(subString);
        subString = "";
      }

    }

    this.differentiate(poly);

  }

  normalisePoly(poly: string): string{

    for(let i = 0; i < poly.length; i++){

      if(poly.charAt(i) === " "){
        poly = poly.replace(" ", "");
      }

    }

    return poly;

  }

}
