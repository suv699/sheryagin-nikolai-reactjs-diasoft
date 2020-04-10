function promiseReduce(asyncFunctions, reduce, initialValue) {
    const localFunc = async () => {
        for await (let item of asyncFunctions) {
            await item().then(() => {reduce()});
        }
        return new Promise(resolve => resolve(asyncFunctions.length))
    }

    return localFunc()

}
module.exports = promiseReduce;