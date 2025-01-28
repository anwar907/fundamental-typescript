
describe('Optional', function (){
    it('should support optional property', function (){
        
        function hello(name?: string | null){
            if(name){
                console.info(`Hello ${name}`);
            } else  {
                console.info('Hello')
            }

        }

        hello('Optional Property')

        const name: string | undefined = undefined;
        hello(name)
        hello(null)
    })
})