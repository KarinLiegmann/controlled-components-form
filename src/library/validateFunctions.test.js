import {
    isValidProductName,
    isValidPrice,
    isValidEmail
} from './validateFunctions'


describe('Product name is valid', () => {
    it('should validate when the product name has more than or exactly 2 characters', () => {
        const result = isValidProductName('a')
        expect(result).toBeFalsy();
    })
})