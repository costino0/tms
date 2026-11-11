import path from 'node:path'

export function getContentType(file) {
    const fileExt = path.extname(file)

    switch(fileExt.toLowerCase()) {
        case '.html':
            return 'text/html; charset=utf-8'
        case '.css':
            return 'text/css; charset=utf-8'
        case '.js':
            return 'text/javascript; charset=utf-8'
        case '.json':
            return 'application/json'
        default:
            return 'application/octet-stream'
    }
}