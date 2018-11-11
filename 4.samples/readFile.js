const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

let pathName = path.join(__dirname, '../../../许嵩-听妈妈的话.lrc');
fs.readFile(pathName, (err, data) => {
    let lines = iconv.decode(data,'gbk').split('\n');
    //遍历
    let begin = new Date();
    let regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;
    lines.forEach((line) => {
        let matches = regex.exec(line);
        if(matches){
            let m = parseFloat(matches[1]);
            let s = parseFloat(matches[2]);
            let f = parseFloat(matches[3]);
            let offset = new Date() - begin;
            let lyric = matches[4];
            setTimeout(() => {
                console.log(lyric);
            }, m * 60 * 1000 + s * 1000 + f - offset);
        } else {
            console.log(line);
        }     
    });
});