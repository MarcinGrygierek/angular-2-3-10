import { transform } from "./transform"

describe('transform', () => {
    it('should return correct value', () => {
        const result = transform([1, 2, 3, 4], 1);
        const expected = [4, '1-2-3-4'];

        expect(result).toEqual(expected);
    })
})