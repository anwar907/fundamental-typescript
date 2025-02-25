describe("Parameter properties", () => {
    class Person {
        constructor(public name: string){

        }
    }

    it("should support", () => {
        const person = new Person("Dana");
        console.info(person.name);

        person.name = "Java";
        console.info(person.name);
    })
})