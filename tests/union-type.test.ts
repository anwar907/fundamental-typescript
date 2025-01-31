
describe('Union Type', function (){
    it('should support in typescript', function (){

        let sample: number | string | boolean = 'typescript';
        
        sample = 100;
        console.info(sample);

        sample = "typescript"
        console.info(sample);

        sample = true;
        console.info(sample);
    })

    it('should support typeof operator', function () {
        function process(value: number | string | boolean){
            if(typeof value === 'string'){
                return value.toUpperCase();

            } else if (typeof value === 'number'){
                return value + 2;
            } else {
                return !value;
            }
        }

        console.info(process('John'));
        console.info(process(100));
        console.info(process(true));

        expect(process('John')).toBe('JOHN');
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    })
})