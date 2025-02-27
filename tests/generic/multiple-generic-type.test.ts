import { Entry, SimpleGeneric, Triple } from "../../src/multiple-generic";


describe("Multiple generic type", () => {

    it("should be return generic type", () => {
        const entry = new Entry(1, "sample");
        expect(entry.key).toBe(1);
        expect(entry.value).toBe("sample");

        const triple = new Triple<number, string, boolean>(32, "Hi", true);
        expect(triple.first).toBe(32);
        expect(triple.second).toBe("Hi");
        expect(triple.third).toBe(true);

        const simple = new SimpleGeneric<string>();
        simple.setValue("Hi");
        // simple.setValue(300);
        // simple.setValue(true);

        expect(simple.getValue()?.toUpperCase()).toBe("Hi");
    });


    it("should be unknow the output", () => {
        // const data = new 
    })
})

