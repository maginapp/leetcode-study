import minSubArrayLen from './minimum-size-subarray-sum'

describe('minimum-size-subarray-sum', () => {
    it('test-1', () => {
        expect(minSubArrayLen(7, [2,3,1,2,4,3])).toBe(2)
    })
    it('test-2', () => {
        expect(minSubArrayLen(8, [2,3,1,2,4,3])).toBe(3)
    })
    it('test-2', () => {
        expect(minSubArrayLen(8, [2,3])).toBe(0)
    })
})