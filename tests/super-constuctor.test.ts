describe("Super Constuctor", () => {
    class Person {
        name: string;

        constructor(name: string){
            this.name = name;
        }
    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string){
            super(name);
            this.department = department;
        }
    }

    it("shpuld return super constructor", () => {
        const employee = new Employee("JavaScript", "OpenSource");
        console.info(employee.name);
        console.info(employee.department);
    })
})