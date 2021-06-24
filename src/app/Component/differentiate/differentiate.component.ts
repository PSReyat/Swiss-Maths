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

  polynomial: Polynomial = new Polynomial();
  poly: string = "";
  differential: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  differentiate(poly: string){
    let x = 0;
    let xParse = "";
    let y = 0;
    let yParse = "";
    let xVarLoci = 0;
    let term: string = "";
    let length: number = this.polynomial.getParsed().size;

    this.parseEquation(poly);
    
    for(let i = 0; i < length; i++){

      term = this.polynomial.getParsed().get(i);

      //Need to change this part of the code (1A)
      for(let j = 0; j < term.length; j++){

        if(term.charAt(0) === "x"){
          x = 1;
          break;
        }

        if(!term.charAt(j).match(/[a-z]/) ){
          xParse += term.charAt(j);
        }else{
          xVarLoci = j;
          break;
        }
      }

      for(let k = xVarLoci; k < term.length; k++){
        if(!term.charAt(k).match(/[a-z]/)){
          yParse += term.charAt(k);
        }else{
          y = 1;
        }
      }
      //(1A)

      x = parseInt(xParse);
      y = parseInt(yParse);

      x = x * y;
      y = y - 1;

      if(x !== 0 && y !== 0){
        
        if(y !== 1){
          this.differential += x.toString() + "x^" + y.toString();
        }else{
          this.differential += x.toString() + "x";
        }

      }else if(y === 0){
        this.differential += x.toString();
      }

      if(i != length - 1){
        this.differential += " + ";
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

