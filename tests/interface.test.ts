import { Seller } from "../src/seller"

describe('Interface', function (){
    it('should support in typescript', function (){
        const seller: Seller = {
            id: 1,
            name: 'Example Seller',
            address: 'Jl. Raya'
        }

        console.info(seller)
    })
})