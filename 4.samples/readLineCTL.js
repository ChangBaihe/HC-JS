const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const readline = require('readline');
const fileName = path.join(__dirname, '../../../许嵩-听妈妈的话.lrc');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
    prompt: 'CBH> '
});
rl.prompt();
rl.on('line', (line) => {
    switch(line.trim()){
        case 'hello':
            console.log('world!');
            break;
        default:
            console.log('Sqy what? I might have heard ' + line);
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});