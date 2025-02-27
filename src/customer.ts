export abstract class Customer {
    readonly id: number;
    abstract name: string;

    constructor(id: number){
        this.id = id;
    }

    abstract sayHello(name: string): void;

    hello(){
        console.info("Hello");
    }
}

export class RegularCustomer extends Customer {
    
    name: string;

    constructor(id: number, name: string){
        super(id);
        this.name = name;
    }

    sayHello(name: string): void {
        console.info(`Hello ${name} my friend is ${this.name}`);
    }
    
}