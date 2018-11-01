const excelJs = require('exceljs');
const _ = require('lodash');
const mongoDB = require('./mongoDB');
const ObjectID = mongoDB.ObjectID;
const config = {
    cbh: 'mongodb://changbaihe:root@127.0.0.1:27017/cbh'
};
(async ()=>{
    let dbs = await mongoDB.init(config);
    let db = dbs['cbh'];
    let template = [{
        _id: new ObjectID(),
        apply_name: '张三',
	    apply_phone: '110',	
	    region: 'a',		
	    school_name: '11',	
	    apply_time: new Date().toLocaleString(),	
	    status: false
    },{
        _id: new ObjectID(),
        apply_name: '张四',
	    apply_phone: '111',	
	    region: 'b',		
	    school_name: '12',	
	    apply_time: new Date().toLocaleString(),	
	    status: false
    },{
        _id: new ObjectID(),
        apply_name: '张五',
	    apply_phone: '112',	
	    region: 'c',		
	    school_name: '13',	
	    apply_time: new Date().toLocaleString(),	
	    status: false
    }];
    let applyColl = db.collection('apply');
    let count = await applyColl.countDocuments();
    if(!count){
        await applyColl.insertMany(template);
    }
    let data = await applyColl.find().toArray();

    console.log('开始导出Excel。');
    let workBook = new excelJs.Workbook();
    workBook.created = new Date();
    workBook.modified = new Date();
    let applySheet = workBook.addWorksheet('apply');
    let columns = [];
    for (const key in data[0]) {
        columns.push({
            header: key, key: key, width:30
        });
    }
    applySheet.columns = columns;
    for (const obj of data) {
        let row = _.map(obj, (value, key) => {
            return value;
        });
        applySheet.addRow(row);
    }
    let path = '/users/cbh/desktop/apply.xlsx';
    console.log('开始导出Excel……');
    let result = await workBook.xlsx.writeFile(path);
    console.log('导出Excel完成。');
})();