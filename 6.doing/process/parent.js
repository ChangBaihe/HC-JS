const fork = require('child_process').fork;
let child = fork(__dirname + '/child.js');
child.on('message', (m)=>{
    console.log(`parent message: ${m}`);
});
child.send(JSON.stringify({hello: 'world'}));