
export interface Employee {
    id: string;
    name: string;
}

export interface Manager extends Employee {
    totalEmployee: number;
}

export interface VP extends Manager {
    totalManager: number;
}

export class EmployeeData<T extends Employee> {
    constructor(public employee: T){}
}