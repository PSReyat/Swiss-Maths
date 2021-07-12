import { Polynomial } from './../../Model/polynomial';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrate',
  templateUrl: './integrate.component.html',
  styleUrls: ['./integrate.component.css']
})
export class IntegrateComponent implements OnInit {
  private polynomial: Polynomial;
  poly: string = "";
  integral: string = "";
  displayPoly: string = "";
  displayIntegral: string = "";
  upperLimit: number = 0;
  lowerLimit: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.polynomial = new Polynomial();
  }

  integrate(poly: string){
    this.polynomial.parseEquation(poly);
    let x = 0;
    let y = 0;
    let xParse = "";
    let yParse = "";
    let xVarLoci = 0;
    let term: string = "";
    let length: number = this.polynomial.getParsed().size;
    console.log("length: " + length);
    
    for(let i = 0; i < length; i++){
      term = this.polynomial.getParsed().get(i);

      for(let j = 0; j < term.length; j++){

        if(term.charAt(0) === "x"){
          x = 1;
          break;
        }

        if(!term.charAt(j).match(/[a-z]/)){
          console.log("term x: " + term.charAt(j));
          xParse += term.charAt(j);
          console.log("xParse: " + xParse);
        }else{
          xVarLoci = j;
          break;
        }

      }

      for(let k = xVarLoci; k < term.length; k++){
        if(!term.charAt(k).match(/[a-z]/)){
          console.log("term y: " + term.charAt(k));
          yParse += term.charAt(k);
          console.log("yParse: " + yParse);
        }
      }

      x = parseFloat(xParse);
      console.log("x: " + x);
      y = parseFloat(yParse);
      console.log("y: " + y);

      y = y + 1;
      x = x / y;

      if(x !== 1 && y !== 1){
        this.integral += x.toString() + "x" + y.toString();
      }

      if(i !== length - 1){
        this.integral += " + ";
      }

      console.log("this.integral: " + this.integral);

      xParse = "";
      yParse = "";

    }

    this.polynomial.setEquation(this.integral);
    this.displayIntegral = this.integral;

  }

  definiteIntegral(upper: number, lower: number){

  }

}

/*
1) dealing with negative terms
2) dealing with terms where x = y
3) definite integrals
*/
