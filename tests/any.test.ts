describe('Any', function (){
    it('should return hello', function (){
        const person: any = {
            id: 1,
            name: 'Anwar',
            age: 20
        };

        person.age = 21;
        person.name = 'Typescript';

        console.info(person);
    })
})