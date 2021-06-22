export class Polynomial {
    private equation: string;
    private parsedEquation: Map<number, string>; 
    private i: number;

    constructor(){
        this.equation = "";
        this.parsedEquation = new Map<number, string>();
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
