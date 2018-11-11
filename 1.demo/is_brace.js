/**
 * 括号配对
 */
//1、字符转换
let char_switch_num = (c)=> {
    switch (c) {
        case '(': return 1; break;
        case '[': return 2; break;
        case '{': return 3; break;
        case ')': return -1; break;
        case ']': return -2; break;
        case '}': return -3; break;
        default: return 0; break;
    }
}
//2、分解字符串判断
let is_brace = (input)=> {
    let flag = true;
    let stack = []; //初始化栈
    for(let i=0; i<input.length; i++){
        let temp = char_switch_num(input[i]);
        //非右括号进栈
        if(temp >= 0){
            stack.push(temp);   
            continue;
        }
         //右括号循环匹配栈顶
        while(stack.length){
            let top = stack.pop(); 
            if(temp+top === 0){
                temp = 0;   //本次匹配成功，temp置0   
                break;
            } else if(temp-top != temp){
                break;
            }
        }
        //判断本次是否匹配成功
        if(temp){
            flag = false;
            break;
        }

    }
    //判断是否栈空
    if(flag && stack.length){
        flag = false;
    }
    return flag;
};
//测试数据
let str = '{[1+(2+(3+4)+5)]+(6+7)}';
console.log(is_brace(str));