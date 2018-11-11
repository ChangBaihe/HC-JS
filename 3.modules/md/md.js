const fs = require('fs');
const path = require('path');
const marked = require('marked');
const browserSync = require('browser-sync');
const home = process.platform === 'win32' ? process.env.USERPROFILE : process.env.HOME;
const desktopPath = `${home}${path.sep}Desktop`; 
const cssMD = fs.readFileSync('./github.css', 'utf8');
const htmlTemplate = `
<!DOCTYPE html>  
<html lang="zh-CN">
    <head>  
        <meta charset="utf-8">  
        <meta http-equiv="x-ua-compatible" content="ie=edge">  
        <title>markdown</title>  
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            {{{style}}}
        </style>
    </head>
    <body>
        <div class=".vs">
            {{{content}}}
        </div>
    </body>
</html>
`;
let filePath = process.argv[2] || './';
if(filePath === './'){
    console.log('please input legal filePath!');
    process.exit(0);
}

filePath = path.join(__dirname, filePath);
browserSync({
    server: path.dirname(filePath),
    index: path.parse(filePath).name+'.html',
    notify: false
});

//watch md
fs.watchFile(filePath, { interval: 200 }, (cur, pre)=> {
    if(cur.mtime === pre.mtime){
        return false;
    }
    //read body
    fs.readFile(filePath, 'utf8', (err, content)=> {
        if(err) throw err;
        let html = htmlTemplate.replace('{{{style}}}', cssMD).replace('{{{content}}}', marked(content));
        //write html
        let indexPath = filePath.replace(path.extname(filePath), '.html');
        fs.writeFile(indexPath, html, 'utf8', (err)=> {
            if(err) throw err;
            console.log(`updated@${new Date().toLocaleString()}`);
            browserSync.reload(path.basename(indexPath));
        });
    });
});