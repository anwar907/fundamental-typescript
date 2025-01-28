import { sayHello } from "../src/hello";

describe('Hello', function () {
    it('should return hello', function ()  {
        expect(sayHello('Anwar')).toBe('Hello Anwar');
    });
});
