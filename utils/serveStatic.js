import fs from 'node:fs/promises'
import path from 'node:path'

import { sendRes } from './sendRes.js'
import { getContentType } from './getContentType.js'

const __dirname = import.meta.dirname
const publicPath = path.join(__dirname, '../public')

export async function serveStatic(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`)

    const requestedPath = url.pathname === '/' ? '/index.html' : url.pathname
    const fullPath = path.join(publicPath, requestedPath)

    if (!fullPath.startsWith(publicPath)) {
        sendRes(res, 404, {
            error: 'Not found',
            message: 'Path not found'
        })
        return
    }

    try {
        const data = await fs.readFile(fullPath)
        const contentType = getContentType(fullPath)

        res.setHeader('Content-Type', contentType)
        res.statusCode = 200
        res.end(data)
    } catch(err) {
        if (err.code === 'ENOENT') {
            sendRes(res, 404, {
                error: 'Not found',
                message: 'Path not found'
            })
        } else {
            console.error(err)
            sendRes(res, 500, {
                error: 'Server error',
                message: 'Internal server error'
            })
        }
    }

}