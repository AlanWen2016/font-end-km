const http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200)
    res.end('Hello')
}).listen(3000)