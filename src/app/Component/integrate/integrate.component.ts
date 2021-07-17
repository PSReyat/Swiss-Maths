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
  displayDefinite: number = 0;
  upperLimit: number = 0;
  lowerLimit: number = 0;
  integralValue: number = 0;
  integralFirst: number = 0;
  integralSecond: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.polynomial = new Polynomial();
  }

  integrate(poly: string){
    this.polynomial.parseEquation(poly);
    this.integral = "";
    this.poly = "";
    let x = 0;
    let y = 0;
    let coeff = "";
    let xParse = "";
    let yParse = "";
    let xVarLoci = 0;
    let term = "";
    let length = this.polynomial.getParsed().size;
    
    //parsing and integration functionality
    for(let i = 0; i < length; i++){
      term = this.polynomial.getParsed().get(i);
      
      //Parsing the coefficient
      for(let j = 0; j < term.length; j++){

        if(term.charAt(0) === "x"){
          x = 1;
          break;
        }

        if(!term.charAt(j).match(/[a-z]/)){
          xParse += term.charAt(j);
        }else{
          xVarLoci = j;
          break;
        }

      }
      //Parsing the coefficient

      //Parsing the power
      for(let k = xVarLoci; k < term.length; k++){
        if(!term.charAt(k).match(/[a-z]/)){
          yParse += term.charAt(k);
        }
      }
      //Parsing the power

      //String to integer for xParse and yParse
      if(xParse !== ""){
        x = parseFloat(xParse);
      }
      
      if(yParse !== ""){
        y = parseFloat(yParse);
      }else if(yParse === "" && term.includes("x")){
        y = 1;
      }else if(!term.includes("x")){
        y = 0;
      }
      //String to integer for xParse and yParse

      y = y + 1;

      //Covering different situations
      //When x and y are < 0
      if(x < 0 && y < 0){
        coeff = (x * -1).toString() + "/" + (y * -1).toString();
        this.integral += "(" + coeff + ")" + "x^" + y.toString();
      }

      //When turning constant into an 'x' term
      if(x !== 0 && y === 1){
        this.integral += x.toString() + "x";
      }

      //When x and y are equal and for when x and y are not equal
      if(x === y){
        this.integral += "x" + y.toString();
      }else if(y !== 1 && coeff === ""){
        this.integral += "(" + x.toString() + "/" + y.toString() + ")" + "x^" + y.toString();
      }
      //Covering different situations

      if(i !== length - 1){
        this.integral += " + ";
      }
      
      this.integralValue += this.definiteIntegral(this.upperLimit, this.lowerLimit, x/y, y);

      xParse = "";
      yParse = "";
      coeff = "";

    }
    //parsing and integration functionality

    this.integral += " + c";

    //Cleaning up
    if(this.integral.includes(" + (-")){
      this.integral = this.integral.replace(" + (-", " - (");
    }
    //Cleaning up

    if(poly !== ""){
      this.polynomial.setEquation(poly);
      this.polynomial.setIntegral(this.integral);
      this.polynomial.setArea(this.integralValue);
    }

    this.displayPoly = this.polynomial.getEquation();
    this.displayIntegral = this.polynomial.getIntegral();
    this.displayDefinite = this.polynomial.getArea();

    this.polynomial.deleteParsed();
    this.integralValue = 0;

  }

  definiteIntegral(upper: number, lower: number, coeff: number, power: number){
    this.integralFirst = coeff * Math.pow(upper, power);
    this.integralSecond = coeff * Math.pow(lower, power);

    return this.integralFirst - this.integralSecond;
  }

}
