const fs = require('fs');
const path = require('path');
const home = process.platform === 'win32' ? process.env.USERPROFILE : process.env.HOME;
const desktopPath = `${home}${path.sep}Desktop`;

let filePath = process.argv[2] || './';
if(filePath === './'){
    console.log('please input legal file or dir path!');
    process.exit(0);
}

const mkdirs = (varPath) => {
    let paths = path.isAbsolute(varPath) ? varPath : path.join(desktopPath, varPath);
    paths = path.relative(desktopPath, paths);
    let floders = paths.split(path.sep);
    let nowPath = desktopPath;
    let foldersLength = floders.length;
    floders.forEach(folder => {
        --foldersLength;
        nowPath = path.join(nowPath, folder);
        try {
            fs.accessSync(nowPath, fs.constants.W_OK);
            if(!foldersLength){
                let matches = /.+(\..+)/.exec(folder);
                const isExit = (nowPath, num, extension) => {
                    try {
                        fs.accessSync(`${nowPath}_${num}${extension}`, fs.constants.W_OK);
                        return isExit(nowPath, ++num, extension);
                    } catch (error) {
                        return num;
                    }
                };
                let num = 0;
                if(matches){
                    nowPath = nowPath.substring(0, nowPath.lastIndexOf('.'));
                    num = isExit(nowPath, 1, matches[1]);
                    fs.writeFileSync(`${nowPath}_${num}${matches[1]}`,'');
                } else {
                    num = isExit(nowPath, 1, '');
                    fs.mkdirSync(`${nowPath}_${num}`);
                }
            }
        } catch (error) {
            if(!foldersLength && /.+\..+/.exec(folder)){
                fs.writeFileSync(nowPath,'');
            } else {
                fs.mkdirSync(nowPath);
            }
        }
    });
};

mkdirs(filePath);