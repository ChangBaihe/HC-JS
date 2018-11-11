const fs = require('fs');
const path = require('path');

let target = path.resolve(__dirname, process.argv[2] || './');
const load = (target, prefix) => {
    let dirInfos = fs.readdirSync(target);
    let dirArr = [], fileArr = [];
    dirInfos.forEach((info) => {
        let stats = fs.statSync(path.join(target, info));
        stats.isFile() ? fileArr.push(info) : dirArr.push(info);
    });
    //├─ └─ │  
    let dirArrLength = dirArr.length;
    let dirCount = 0;
    dirArr.forEach((dirInfo) => {
        let dirPrint = `${prefix}├─ ${dirInfo}`;
        let _prefix = prefix + '│  ';
        if(!fileArr.length && !--dirArrLength){
            dirPrint = `${prefix}└─ ${dirInfo}`;
            _prefix = prefix + '   ';
        }
        console.log(dirPrint);
        load(path.join(target, dirInfo), _prefix);
    });

    let fileArrLength = fileArr.length;
    fileArr.forEach((fileInfo) => {
        let filePrint = --fileArrLength ? `${prefix}├─ ${fileInfo}` : `${prefix}└─ ${fileInfo}`;
        console.log(filePrint);
    });
};

console.log('Root');
load(target, '');
