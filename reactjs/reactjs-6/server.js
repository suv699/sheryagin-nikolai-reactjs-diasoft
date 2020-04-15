const express = require('express')
const server = express()

const PORT = 5000
server.use('/api', (req, res) => {
    delay(100).then(() => {
        res.status(200).json({result: 'ok'})
    })
})

server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT} !`)
})

const delay = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms))