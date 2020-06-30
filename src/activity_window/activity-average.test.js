import MovingAverage from './activity-average'

describe('activity-average test', () => {
    it('expect', () => {

        /*
            m = new MovingAverage(3);
            m.next(1) = 1
            m.next(10) = (1 + 10) / 2
            m.next(3) = (1 + 10 + 3) / 3
            m.next(5) = (10 + 3 + 5) / 3
        */
        const ma = new MovingAverage(3); 

        expect(ma.next(1)).toBe(1)

        expect(ma.next(10)).toBe((1 + 10) / 2)
        expect(ma.next(3)).toBe((1 + 10 + 3) / 3)
        expect(ma.next(5)).toBe((10 + 3 + 5) / 3)


    });


})