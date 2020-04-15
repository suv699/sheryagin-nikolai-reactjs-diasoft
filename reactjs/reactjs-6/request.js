const fetch = require('node-fetch');
const URL = 'http://localhost:5000/api'
function request(count, type) {
    const arr = getNewArray(count) || []
    return type === 'sync' ? syncRequest(arr) : asyncRequest(arr)
}
async function asyncRequest(r) {
    let promises = []
    for(let item of r) {
        promises.push(await fetch(URL))
    }
    return Promise.all(promises)
}
function syncRequest(r) {
    return Promise.all(r.map(() => fetch(URL)))
}
function getNewArray(c) {
    let a = []
    for (let i = 0; i < c; i++) {
        a.push(i)
    }
    return a
}

module.exports = request