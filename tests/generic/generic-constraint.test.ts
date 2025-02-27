import { Employee, EmployeeData, Manager, VP } from "../../src/generic-constraint";

describe("Generic constraint", () => {

    it("should return generic constraint data", () => {
        const data = new EmployeeData<Employee>({
            id: "200",
            name: "Type"
        });

        const data1 = new EmployeeData<Manager>({
            id: "300",
            name: "Script",
            totalEmployee: 399
        });

        const data2 = new EmployeeData<VP>({
            id: "400",
            name: "Generics",
            totalEmployee: 399,
            totalManager: 100
        });

        console.info(data);
        console.info(data1);
        console.info(data2);

        // const data3 = new EmployeeData<string>("Sample"); // error
        // const data4 = new EmployeeData<number>(32323); // error 
    })
})