const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const readline = require('readline');

let fileName = path.join(__dirname, '../../../许嵩-听妈妈的话.lrc');
let readStream = fs.createReadStream(fileName).pipe(iconv.decodeStream('gbk'));
let rl = readline.createInterface({
    input: readStream
});

const begin = new Date();
const regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;
rl.on('line', (line) => {
    task(line, begin, regex);
});
const task = (line, begin, regex) => {
    let matches = regex.exec(line);
    if(matches){
        let m = parseFloat(matches[1]);
        let s = parseFloat(matches[2]);
        let f = parseFloat(matches[3]);
        let lyric = matches[4];
        let offset = new Date() - begin;
        setTimeout(() => {
            console.log(lyric);
        }, m * 60 * 1000 + s * 1000 + f - offset);
    } else {
        console.log(line);
    }
};