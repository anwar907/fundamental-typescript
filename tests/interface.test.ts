import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe('Interface', function (){
    it('should support in typescript', function (){
        const seller: Seller = {
            id: 1,
            name: 'Example Seller',
            address: 'Jl. Raya'
        }

        console.info(seller)
    });

    it('should support in typescript', function (){
        interface AddUser {
            (value: number, value2: number): number
        }

        const addUser: AddUser = (value: number, value1: number): number => {
            return value + value1;
        }

        expect(addUser(1, 1)).toBe(2);
    });

    it('should support indexabale interface', function() {
        interface NumberArray {
            [index: number]: number
        }

        const listNumber: NumberArray = [1, 2, 3, 4, 5];

        console.info(listNumber);
        expect(listNumber[0]).toBe(1);
        expect(listNumber[1]).toBe(2);
        expect(listNumber[2]).toBe(3);
        expect(listNumber[3]).toBe(4);
        expect(listNumber[4]).toBe(5);
    });

    it('should support indexable interface for non number index', function (){
        interface StringArray {
            [key: string]: string
        }

        const dictionary: StringArray = {
            'name': 'John',
            'address': 'Jl. Raya'
        }

        console.info(dictionary);

        expect(dictionary['name']).toBe('John');
        expect(dictionary['address']).toBe('Jl. Raya');
    });

    it('should support extends interface', function (){
      
        const person: Person = {
            name: 'typescript',
            sayHello(name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello('John'))


    })

    it('should support intersection types', function () {
        interface HasName {
            name: string;
        }

        interface HasRoom {
            room: string;
        }

        type Player = HasName & HasRoom;

        const player: Player = {
            name: 'John',
            room: 'Room 1'
        }

        console.info(player)
    })

    it('should support type assertion', function (){

        const person: any = {
            name: 'John',
            age: 20
        }

        const person2: Person = person as Person;

        console.info(person2)
    })
})
