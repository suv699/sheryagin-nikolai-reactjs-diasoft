async function promiseReduce(asyncFunctions, reduce, initialValue) {
        let v = initialValue
        for(let item of asyncFunctions) {
            const p = await item();
            v = reduce(p, v)
        }
        return new Promise(resolve => resolve(v))
}
module.exports = promiseReduce;