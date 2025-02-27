import { GenericData, GenericTable } from "../../src/generic-data";
import { create } from "../../src/generic-function";

describe("Generic", () => {
    it("Should return data generic", () => {

    const data = new GenericData(234);

    console.info(data.get());

    data.set(20);

    console.info(data.value);

    // data.value = "Java";
    // data.value = true;

    
    });

    it("Should return data table", () => {
        const table = new GenericTable<string>("Sample");
        
        // table.value = 4323;
        // table.value = true;

        const upper = table.value.toUpperCase();
        expect(upper).toBe("SAMPLE")
    });

    it("Should support", () => {
        const result = create<string>("Hello");
        expect(result).toBe("Hello");

        const result2 = create<number>(32);
        expect(result2).toBe(32)
    })
})