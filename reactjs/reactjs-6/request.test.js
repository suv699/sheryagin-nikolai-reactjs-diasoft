const request = require('./request')

describe('request', function () {
    it('request', () => {
        return request(5, 'sync').then((res) => {
            expect(res.length).toBe(5);
        })
    });
}, 2000);

describe('request', function () {
    it('request', () => {
        return request(7, 'async').then((res) => {
            expect(res.length).toBe(7);
        })
    });
}, 2000);