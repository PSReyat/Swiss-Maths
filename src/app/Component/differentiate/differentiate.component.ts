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
