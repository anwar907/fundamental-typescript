describe("Inheritance", () => {

    class Employee {
        name: string;

        constructor(name: string){
            this.name = name;
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {

    }


    
    it.only("should support", () => {
        const employee = new Employee("Tim");
        console.info(employee.name);

        const manager = new Manager("Inti");
        console.info(manager.name);

        const director = new Director("Gue");
        console.info(director.name);
    })

    it("should return second tested", () => {
        const employee = new Employee("Tim");
        console.info(employee.name);

        const manager = new Manager("Inti");
        console.info(manager.name);

        const director = new Director("Gue");
        console.info(director.name);
    })

})