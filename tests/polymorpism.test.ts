describe("Polymorphism", () => {
    class Employee {
        constructor(public name: string){

        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager{
        
    }

    function sayHelloWrong(employee: Employee): void {
        if(employee instanceof Manager){
            const vip = employee as Manager;
            console.info(`Hello Manager ${employee.name}`);
        } else if (employee instanceof VicePresident){
            const manager = employee as VicePresident;
            console.info(`Hello Pak ${manager.name}`);
        } else {
            console.info(`Hello Employee ${employee.name}`);
        }
    }

    function sayHello(employee: Employee): void {
        // urutan posisi level nya mulai dari yang bawah
        if(employee instanceof VicePresident){
            const vip = employee as VicePresident;
            console.info(`Hello Pak ${employee.name}`);
        } else if (employee instanceof Manager){
            const manager = employee as Manager;
            console.info(`Hello Manager ${manager.name}`);
        } else {
            console.info(`Hello Employee ${employee.name}`);
        }
    }

    it("should return employee, manager and VicePresident", () => {
        let employee: Employee = new Employee("tukang ketik");
        console.info(employee);

        employee = new Manager("baim");
        console.info(employee);


        employee = new VicePresident("pabek");
        console.info(employee);
    })

    it("should support method parameter", () => {
        sayHelloWrong(new Employee("Java"));
        sayHelloWrong(new Manager("Script"));
        sayHelloWrong(new VicePresident("JavaScript"));
        
        sayHello(new Employee("tukang ketik"));
        sayHello(new Employee("tukang atur"));
        sayHello(new Employee("tukang suruh"))
    })
})