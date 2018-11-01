const doEach = (num, arr, index, pre_arr) => {
    let pre = 0;
    let temp = [];
    for (let i=0; i<arr.length; i++) {
        let now = arr[i] * 1 + pre;
        let sum = num * now;
        let m = sum % 10;
        pre = Math.floor(sum / 10);
        temp.push(m);
    }

    pre = 0;
    for (let [i, j] = [0, index]; i<temp.length; i++, j++) {
        let now = pre_arr[j] ? pre_arr[j] * 1 : 0;
        let sum = temp[i] + now + pre;
        let m = sum % 10;
        pre = Math.floor(sum / 10);
        pre_arr[j] = m;
    }
};
const count = (a, b) => {
    let [temp_a, temp_b] = [a.split('').reverse(), b.split('').reverse()];
    if(b.length > a.length) {
        [temp_a, temp_b] = [temp_b, temp_a];
    }
    let result = [];
    for (let i=0; i<temp_b.length; i++) {
        doEach(temp_b[i]*1 || 0, temp_a, i, result);
    }
    return result.reverse().join('');
};
let a = '984163571315489489156161888894';
let b = '15156161561456456456465';
console.log(count(a, b));