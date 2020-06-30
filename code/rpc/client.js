const net = require('net')

const socket = new net.Socket({})


socket.connect({
    host: '127.0.0.1',
    port: 4000
})  




const lessonId = [
    1234,1235,1236
]

let buffer = Buffer.alloc(4)
let id= lessonId[Math.floor(Math.random() * lessonId.length)]

console.log(id)
buffer.writeInt32BE(id)
socket.write(buffer)

socket.on('data', (buffer)=>{
    console.log(buffer.toString())

     buffer = Buffer.alloc(4)
     id= lessonId[Math.floor(Math.random() * lessonId.length)]
    buffer.writeInt32BE(id)
    socket.write(buffer)

})