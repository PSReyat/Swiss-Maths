export class Polynomial {
    private equation: string;
    private parsedEquation: Map<number, string>; 
    private i: number;

    constructor(poly?: string){
        this.equation = "";
        this.parsedEquation = new Map<number, string>();
        this.i = 0;
    }

    getParsed(){
        return this.parsedEquation;
    }

    setEquation(equation: string){
        this.equation = equation;
    }

    getEquation() {
        return this.equation;
    }

    parseEquation(poly: string){

        poly = this.normalisePoly(poly);
        let subString: string = "";
    
        for(let i = 0; i < poly.length; i++){
    
          if(poly.charAt(i) !== "+"){
            console.log("1st if: " + poly.charAt(i));
            subString += poly.charAt(i);
            console.log("subString: " + subString);
          }
          // || poly.charAt(i) === poly.charAt(poly.length - 1)
          if(poly.charAt(i) === "+"){
            console.log("second if: " + poly.charAt(i));
            this.parsedEquation.set(this.i, subString);
            subString = "";
            this.i++;
          }
    
        }
    
      }
    
      normalisePoly(poly: string): string{
    
        for(let i = 0; i < poly.length; i++){
    
          if(poly.charAt(i) === " "){
            poly = poly.replace(" ", "");
          }
    
        }

        console.log(poly);
    
        return poly;
    
      }
}
