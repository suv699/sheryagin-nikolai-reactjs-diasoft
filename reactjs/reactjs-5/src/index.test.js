const promiseReduce = require("./index");
const FuncArrTest = require("./funcArrTest");

const funcArrTest = new FuncArrTest()
funcArrTest.generateTestFuncArr(5)
const FuncArr = funcArrTest.getArrFunc()
const msAll = funcArrTest.getMsAll()
const compareArr = funcArrTest.getCompareArr()

describe('promiseReduce', function () {
    it('test1', () => {
        const testConsole = funcArrTest.getTestConsole()
        return promiseReduce(/*[fn1, fn2, fn3, fn4, fn5]*/FuncArr,
            function (memo, value) {
                testConsole.log('reduce');
                return memo * value;
            },
            1
        )
            .then(testConsole.log)
            .then(() => {
                const resultLog = testConsole.result();
                expect(resultLog).toBe(compareArr.join('\n'));
            })
    }, msAll + 1000);
});


