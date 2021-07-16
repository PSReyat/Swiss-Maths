export class Polynomial {
  private equation: string;
  private gradient: string;
  private integral: string;
  private area: number;
  private parsedEquation: Map<number, string>;
  private i: number;

  constructor(poly?: string){
    this.equation = "";
    this.gradient = "";
    this.integral = "";
    this.area = 0;
    this.parsedEquation = new Map<number, string>();
    this.i = 0;
  }

  getGradient(){
    return this.gradient;
  }

  setGradient(gradient: string){
    this.gradient = gradient;
  }

  getIntegral(){
    return this.integral;
  }

  setIntegral(area: string){
    this.integral = area;
  }

  getArea(){
    return this.area;
  }

  setArea(area: number){
    this.area = area;
  }

  getEquation(){
    return this.equation;
  }

  setEquation(equation: string){
    this.equation = equation;
  }

  getParsed(){
    return this.parsedEquation;
  }

  deleteParsed(){
    this.parsedEquation.clear();
    this.i = 0;
  }

  //Differentiation functionality
  parseEquation(poly: string){

    poly = this.normalisePoly(poly);
    let subString: string = "";

    for(let i = 0; i < poly.length; i++){

      if(poly.charAt(i) !== "+"){
        subString += poly.charAt(i);
      }
      
      if(poly.charAt(i) === "+" || i === poly.length - 1){
        this.parsedEquation.set(this.i, subString);
        subString = "";
        this.i++;
      }

    }
  
  }
  //Differentiation functionality

  //Getting rid of spaces
  normalisePoly(poly: string): string{

    for(let i = 0; i < poly.length; i++){

      if(poly.charAt(i) === " "){
        poly = poly.replace(" ", "");
      }

    }

    return poly;

  }
}
