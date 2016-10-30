import http from 'http'
import ecstatic from 'ecstatic'
const server = http.createServer(ecstatic(__dirname))
server.listen(8000)
