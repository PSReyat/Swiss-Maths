export class Polynomial {
    private equation: string;

    set(equation: string){
        this.equation = equation;
    }

    get() {
        return this.equation;
    }
}
