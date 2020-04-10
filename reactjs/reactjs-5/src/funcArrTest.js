const TestConsole = require("./testConsole");

const FuncArrTest = function() {
    this.testConsole = new TestConsole();
    this.getTestConsole = () => {
        return this.testConsole
    }
    this.compareArr = []
    this.arrFunc = []
    this.msAll = 0

    this.generateTestFuncArr = (count) => {
        for(let i = 0; i < count; i++) {
            const ms = randomInteger(1, 5) * 1000
            this.msAll+=ms

            const fn = () => new Promise(resolve => {
                this.testConsole.log('fn' + i)
                setTimeout(() => resolve(i), ms)
            })

            this.arrFunc.push(fn)
            this.compareArr.push('fn'+i)
            this.compareArr.push('reduce')
        }
    }

    const randomInteger = (min, max) => {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    this.getMsAll = () => {
        return this.msAll
    }
    this.getArrFunc = () => {
        return this.arrFunc
    }
    this.getCompareArr = () => {
        this.compareArr.push(this.getArrFunc().length + '')
        return this.compareArr
    }
}

module.exports = FuncArrTest