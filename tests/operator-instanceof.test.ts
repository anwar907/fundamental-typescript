describe("Operator Instanceof dan typeof", () => {

    class Employee {}
        class Manager {}

        const budi = new Employee();
        const nudi = new Manager();

    it("should have problem using typeof", () => {

        console.info(typeof budi);
        console.info(typeof nudi);
        
    })

    it("should support instanceof", () => {
        expect(budi instanceof Employee).toBe(true);
        expect(budi instanceof Manager).toBe(false);
        
        expect(nudi instanceof Employee).toBe(false);
        expect(nudi instanceof Manager).toBe(true);
    })
})