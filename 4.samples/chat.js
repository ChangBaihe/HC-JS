const net = require('net');
const port = 8080;
const listener = (socket)=> {
    console.log(`${socket.remoteAddress} : ${socket.remotePort} 进来了`);
    socket.on('connect', ()=>{
        socket.write(`你想干啥！`);
    });
    socket.on('data', (chunk)=> {
        let json = JSON.parse(chunk.toString());
        console.log(json);
    });
    socket.on('close', (had_err)=> {
        console.log(`${socket.remoteAddress} : ${socket.remotePort} : ${had_err}`);
    });
}
const server = net.createServer(listener);
server.listen(port, (err)=>{
    console.log(`listen port:${port} success.`);
});