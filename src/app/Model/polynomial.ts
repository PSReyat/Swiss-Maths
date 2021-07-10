export class Polynomial {
    private parsedEquation: Map<number, string>;
    private i: number;

    constructor(poly?: string){
        this.parsedEquation = new Map<number, string>();
        this.i = 0;
    }

    getParsed(){
      return this.parsedEquation;
    }

    deleteParsed(){
      this.parsedEquation.clear();
      this.i = 0;
    }

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
    
      normalisePoly(poly: string): string{
    
        for(let i = 0; i < poly.length; i++){
    
          if(poly.charAt(i) === " "){
            poly = poly.replace(" ", "");
          }
    
        }
    
        return poly;
    
      }
}
