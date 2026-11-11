import http from 'node:http'

import { sendRes } from './utils/sendRes.js'
import { serveStatic } from './utils/serveStatic.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {

    await serveStatic(req, res)
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})