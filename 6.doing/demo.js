const is_match = (input)=> {
    let enum_switch = {
        '{': 1,
        '}': -1
    };
    let [flag, count] = [true, 0];
    let stack = []; 
    for (let i=0; i<input.length; i++) {
        let temp = enum_switch[input[i]] || 0;
        if(temp >= 0){
            stack.push(temp);   
            continue;
        }
        while (stack.length) {
            let top = stack.pop(); 
            if (temp+top === 0) {
                temp = 0;  
                count++;
                break;
            } else if(temp-top != temp) {
                break;
            }
        }
        if (temp){
            flag = !flag;
            break;
        }
    }
    if (flag && stack.length) {
        flag = false;
    }
    return {
        flag,
        count
    };
};

const fix = (input) => {
    let template = {
        a: `$\{${input}}$`,
        b: `$${input}$`,
        c: `$\{{${input}}}$`
    };
    let type = 'a';
    if (input.indexOf('{') !==-1 && input.indexOf('}') !== -1) {
        let result = is_match(input);
        switch(result.count) {
        case 0: type = 'c'; break;
        case 1: type = 'b'; break;
        }
    }
    return template[type];
}
console.log(fix('a+b'));
console.log(fix('{a+b}'));
console.log(fix('a}+{b'));
console.log(fix('{a}+{b}'));