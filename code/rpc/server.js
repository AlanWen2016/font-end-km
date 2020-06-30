const net = require('net')

const server = net.createServer((socket)=>{
    socket.on('data', function(buffer){
        const lessonId = buffer.readInt32BE()
        setTimeout(()=>{
            // console.log(data[lessonId])
            socket.write(Buffer.from(data[lessonId]))
        }, 500)
    })
})
server.listen(4000)


const data = {
    1234: 'tite 1',
    1235: 'title 2',
    1236: 'title 3'
}       