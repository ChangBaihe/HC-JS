//1、抽奖模块
/**
 * is_luck 判断是否中奖函数
 * @param {*} luck_num 幸运数字
 * @param {*} cursor   当前游标
 * @param {*} arr      奖品存货量
 * @param {*} percent  中奖率
 * @param {*} msgs     提示信息
 * return msg   //是否中奖的信息提示
 */
let is_luck = (luck_num,cursor,arr,percent,msgs) => {
    if(cursor >= percent.length) return msgs[msgs.length-1];
    if(luck_num <= percent[cursor]) 
        return arr[cursor]-->0 ? '恭喜你中了'+msgs[cursor]+'等奖' : msgs[msgs.length-1];
    return is_luck(luck_num,++cursor,arr,percent,msgs);
};

/**
 * random   摇奖函数
 * @param {*} arr      奖品存货量
 * @param {*} percent  中奖率
 * @param {*} msgs     提示信息
 */
let random = (arr,percent,msgs) => {
    let luck_num = Math.random()*100;
    let msg = is_luck(luck_num,0,arr,percent,msgs);
    console.log(msg);
};

//2、数据测试
let arr = [200,500,1000,5000,20000];
let percent = [0.13,0.33,0.67,3.33,13.33];
let msgs = ['A','B','C','D','E','谢谢惠顾!'];
let n = 10000;
while(n--) random(arr, percent, msgs);

//3、万人抽奖，中奖率统计
console.log('10000人抽奖后的统计，当前奖品剩余:');
console.log('A:'+arr[0]+' 中奖率:'+(200-arr[0]*1.0)/100+'%');
console.log('B:'+arr[1]+' 中奖率:'+(500-arr[1]*1.0)/100+'%');
console.log('C:'+arr[2]+' 中奖率:'+(1000-arr[2]*1.0)/100+'%');
console.log('D:'+arr[3]+' 中奖率:'+(5000-arr[3]*1.0)/100+'%');
console.log('E:'+arr[4]+' 中奖率:'+(20000-arr[4]*1.0)/100+'%');