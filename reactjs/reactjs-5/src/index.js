async function promiseReduce(asyncFunctions, reduce, initialValue) {
    let v = initialValue
    for(let item of asyncFunctions) {
        v = reduce(await item(), v);
    }
    return v
}
module.exports = promiseReduce;