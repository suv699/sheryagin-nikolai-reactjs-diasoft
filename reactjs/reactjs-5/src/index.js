async function promiseReduce(asyncFunctions, reduce, initialValue) {
    for(let item of asyncFunctions) {
        initialValue = reduce(await item(), initialValue);
    }
    return initialValue
}
module.exports = promiseReduce;