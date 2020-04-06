import sum from './sum'

describe('sum', function() {
    it('sum(undefined)() // undefined', function() {
        const res = sum(undefined)();
        expect(res).toBe(undefined);
    });
    it('sum(1)() // 1', function() {
        const res = sum(1)();
        expect(res).toBe(1);
    });
    it('sum(1)(2)(3)(4)() // 10', function() {
        const res = sum(1)(2)(3)(4)();
        expect(res).toBe(10);
    });
    it('sum(0)(5)(3)(8)(-2)() // 14', function() {
        const res = sum(0)(5)(3)(8)(-2)();
        expect(res).toBe(14);
    });
    it('sum(1)(1)(1)(1)(1)(1)(1)() // 7', function() {
        const res = sum(1)(1)(1)(1)(1)(1)(1)();
        expect(res).toBe(7);
    });
    it('sum(1)(1)(-5)(2)(3)() // 2', function() {
        const res = sum(1)(1)(-5)(2)(3)();
        expect(res).toBe(2);
    });
    it('sum(1)(2)(-3)(4)(-2)(3)(2)(1)() // 8', function() {
        const res = sum(1)(2)(-3)(4)(-2)(3)(2)(1)();
        expect(res).toBe(8);
    });
    it('sum(0)(5)(4)(-2)(3)(-2)() // 8', function() {
        const res = sum(0)(5)(4)(-2)(3)(-2)();
        expect(res).toBe(8);
    });
    it('sum(1)(5)(10)(1)(1)(1)(-3)() // 16', function() {
        const res = sum(1)(5)(10)(1)(1)(1)(-3)();
        expect(res).toBe(16);
    });
    it('sum(1)(5)(0)(1)(1)(1)(-3)() // 6', function() {
        const res = sum(1)(5)(0)(1)(1)(1)(-3)();
        expect(res).toBe(6);
    });

});
