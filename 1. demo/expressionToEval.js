const getPriority = (pre, now) => {
    const operators = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };
    return operators[now] - operators[pre]||0;
};
const switchNum = (argv) => {
    let adpter = 0;
    switch (argv) {
        case '(': adpter = 1; break;
        case '[': adpter = 2; break;
        case '{': adpter = 3; break;
        case ')': adpter = -1; break;
        case ']': adpter = -2; break;
        case '}': adpter = -3; break;
    }
    if (adpter) {
        return adpter;
    }
    let enumOperator = {
        '+': 1,
        '-': 1,
        '*': 1,
        '/': 1
    };
    if (argv && !isNaN(argv * 1)) {
        adpter = 4;
    } else if (enumOperator[argv]) {
        adpter = 5;
    }
    return adpter;
};
const toDo = (a, b, operator) => {
    switch (argv) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
};
const doEval = (input) => {
    const operatorStack = [];
    const numStack = [];
    const cache = '';
    for (let i=0; i<input.length; i++){
        let cursor = input[i];
        let tempNum = switchNum(cursor);
        if (tempNum > 0 && tempNum < 4) {
            operatorStack.push(cursor);
        } else if (tempNum === 4) {
            numStack.push(cursor);
        } else if (tempNum === 5) {
            if(!operatorStack.length){
                operatorStack.push(cursor);
                continue;
            }
            let priority = getPriority(operatorStack[operatorStack.length-1], cursor);
            if(priority < 0){}
        }
    }
};

let str = '';
let result = doEval(str);
console.log(result);
