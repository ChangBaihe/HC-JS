/**
 * 最低位优先(LSD)
 */
//1.初始化队列0~9
let queues = [];
for(let i=0; i<10; i++){
    queues[i]=[];
}
//2.分配、收集
let radixSort = (arr,n)=>{
    for(let i in arr){
        let key = Math.floor(arr[i]/n)%10;
        queues[key].push(arr[i]);
    }
    let temp_arr = [];
    for(let i in queues){
        if(queues[i].length > 0){
            temp_arr = [...temp_arr,...queues[i]];
            if(queues[0].length === arr.length) return temp_arr;
            queues[i] = [];
        }
    }
    return radixSort(temp_arr,n*10);
};

//测试
let arr = [170,45,75,90,2,24,802,66,37,14];
console.log('to sort:');
console.log(arr);
console.time('sorted');
arr = radixSort(arr,1)
console.timeEnd('sorted');
console.log(arr);