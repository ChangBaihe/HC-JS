console.log('我是一个子进程');
process.on('message', (m)=>{
    console.log(`child receive1: ${m}`);
});
process.send(JSON.stringify({foo: 'bar'}));