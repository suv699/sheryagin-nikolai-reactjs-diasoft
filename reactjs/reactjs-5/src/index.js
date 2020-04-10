async function promiseReduce(asyncFunctions, reduce, initialValue) {
    let v = initialValue
    for(let item of asyncFunctions) {
        const p = await item();
        v = reduce(p, v)
    }
    return v
}
module.exports = promiseReduce;