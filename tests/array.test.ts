
describe('Type Data', function () {

    /// Array
    it('should return hello', function ()  {
        const name: string[] = ['John', 'Rizky'];
        const antrian: number[] = [1, 2, 3, 4, 5];
        const age: number = 20;
        const isMarried: boolean = false;

        console.log(antrian),
        console.log(name),

        expect(name).toBeInstanceOf(Array);
        expect(age).toBe(20);
        expect(isMarried).toBe(false);
    });

    it('should return hello', function ()  {
        const hobby: readonly string[] = ['coding', 'reading', 'traveling'];

        console.info(hobby[0]);

        expect(hobby).toBeInstanceOf(Array);
    });
});
