import http from 'node:http'
import { sendRes } from './utils/sendRes.js'

const PORT = 8000

const server = http.createServer((req, res) => {
    sendRes(res, 200, {
        message: 'This is from the server'
    })
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})