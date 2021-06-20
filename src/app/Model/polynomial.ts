export class Polynomial {
    private equation: string;
    private parsedEquation: Map<Number, String>; 
    private i: number;

    constructor(){
        this.equation = "";
        this.parsedEquation = new Map<Number, String>();
        this.i = 0;
    }

    setParsed(parsed: string){
        this.parsedEquation.set(this.i, parsed);
        this.i++;
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
}
