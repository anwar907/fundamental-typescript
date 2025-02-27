export class GenericData<T> {
    value: T;

    constructor(value: T){
        this.value = value;
    }

    get(): T {
        return this.value;
    }

    set(value: T){
        this.value = value;
    }
}

export class GenericTable<T>{
    constructor(public value: T){}
}
