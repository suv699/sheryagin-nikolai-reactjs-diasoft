const express = require('express')
const server = express()

const PORT = 5000
server.use('/api', (req, res) => {
    console.log('request start')
    delay(100).then(() => {
        res.status(200).json({result: 'ok'})
    })
    console.log('request end')
})

server.listen(PORT, () => {
    console.log(`server has been started on port ${PORT} !`)
})

const delay = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms))