const fetch = require('node-fetch');

function request(count, type) {
    const arr = getNewArray(count) || []
    return type === 'sync' ? syncRequest(arr) : asyncRequest(arr)
}
async function asyncRequest(r) {
    let promises = []
    for(let item of r) {
        promises.push(await fetch('http://localhost:5000/api'))
    }
    return await Promise.all(promises)
}
async function syncRequest(r) {
    const p = r.map(() => fetch('http://localhost:5000/api'));
    return await Promise.all(p)
}
function getNewArray(c) {
    let a = []
    for (let i = 0; i < c; i++) {
        a.push(i)
    }
    return a
}

module.exports = request