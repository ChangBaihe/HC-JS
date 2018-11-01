let find = (arr, index, target) => {
    let count = 0;
    let opNum = target - arr[index-1];
    for (let i=index; i<arr.length; i++) {
        if (opNum - arr[i] > 0) {
            count += find(arr, i+1, opNum);
        } else if (opNum - arr[i] === 0) {
            count++;
        } else {
            break;
        }
    }
    return count;
};
let sum = (arr, index, target) => {
    let count = find(arr, index, target);
    if (index === arr.length-1) {
        return count;
    } else {
        return count + sum(arr, index+1, target);
    }
}
let arr = [1,2,2,4,4].sort((a,b)=>a-b);
let target = 9;
console.log(arr);
let num = sum(arr, 1, target);
console.log(num);