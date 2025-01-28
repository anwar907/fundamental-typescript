describe('Object', function (){
    it('should support in typescript', function (){
       const person: {id: number, name: string, hobbi?: string[]} = {
        id: 1,
        name: "Sample object"
       }
       console.info(person);
    })
})