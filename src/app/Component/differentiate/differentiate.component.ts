import { Polynomial } from './../../Model/polynomial';
import { Component, Input, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { ParsedEvent } from '@angular/compiler';

@Component({
  selector: 'app-differentiate',
  templateUrl: './differentiate.component.html',
  styleUrls: ['./differentiate.component.css']
})
export class DifferentiateComponent implements OnInit {

  private polynomial: Polynomial = new Polynomial();
  poly: string = "";
  displayPoly: string = "";
  displayDifferential: string = "";
  private differential: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  differentiate(poly: string){
    this.polynomial.parseEquation(poly);
    let x = 0;
    let xParse = "";
    let y = 0;
    let yParse = "";
    let xVarLoci = 0;
    let term: string = "";
    let length: number = this.polynomial.getParsed().size;
    
    this.poly = "";
    this.differential = "";

    //parsing and differentiation functionality
    for(let i = 0; i < length; i++){

      term = this.polynomial.getParsed().get(i);

      //Parsing the coefficient
      for(let j = 0; j < term.length; j++){

        if(term.charAt(0) === "x"){
          x = 1;
          break;
        }

        if(!term.charAt(j).match(/[a-z]/) || term.charAt(j) === "-"){
          xParse += term.charAt(j);
          xVarLoci = j;
        }else{
          xVarLoci = j;
          break;
        }
      }
      //Parsing the coefficient

      //Parsing the power
      for(let k = xVarLoci; k < term.length; k++){

        if(!term.includes("x")){
          y = 0;
          break;
        }

        if(!term.charAt(k).match(/[a-z]/) || term.charAt(k) === "-"){
          yParse += term.charAt(k);
        }else{
          y = 1;
        }
      }
      //Parsing the power

      //Turning xParse and yParse from string to integer
      if(x !== 1){
        x = parseFloat(xParse);
      }

      if(yParse === "" && !term.includes("x")){
        y = 0;
      }else if(yParse === "" && term.includes("x")){
        y = 1;
      }else{
        y = parseFloat(yParse);
      }
      //Turning xParse and yParse from string to integer

      x = x * y;
      y = y - 1;

      //Covering different situations
      if(x !== 0 && y !== 0){
        
        if(y === 1){
          this.differential += x.toString() + "x";
        }else{
          this.differential += x.toString() + "x^" + y.toString();
        }

      }else if(y === 0){
        this.differential += x.toString();
      }
      //Covering different situations

      if(i !== length - 1){
        this.differential += " + ";
      }

      xParse = "";
      yParse = "";

    }
    //parsing and differentiation functionality

    //Cleaning up
    if(this.differential.endsWith(" + ")){
      this.differential = this.differential.substring(0, this.differential.length - 3)
    }

    if(this.differential.includes(" + -")){
      this.differential = this.differential.replace(" + -", " - ");
    }
    //Cleaning up

    if(poly !== ""){
      this.polynomial.setEquation(poly);
      this.polynomial.setGradient(this.differential);
    }

    this.displayPoly = this.polynomial.getEquation();
    this.displayDifferential = this.polynomial.getGradient();

    this.polynomial.deleteParsed();

  }

}
