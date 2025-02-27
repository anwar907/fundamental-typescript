import { create } from "../../src/generic-function";

describe("Generic function", () => {

    it("should be return function", () => {
        const result = create<number>(20);
        expect(result).toBe(20);
        console.info(result.toFixed())
    })
})