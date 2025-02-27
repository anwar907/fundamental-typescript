describe("Generic collection", () => {

    it("should return data array", () => {
        const data = new Array<string>();

        data.push("Sample");
        data.push("Java");
        // data.push(1324)

        expect(data[0]).toBe("Sample");
        expect(data[1]).toBe("Java");
    });

    it("should return data set", () => {
        const set = new Set<string>();
        set.add("Java");
        set.add("Script");
        set.add("Java");

        expect(set.size).toBe(2);
        expect(set.has("Java")).toBe(true);
        expect(set.has("Script")).toBe(true);
    })
})