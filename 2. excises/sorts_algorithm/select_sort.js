/**
 * 选择排序
 * 对比：
 *    选择排序每次比计较仅记录最小或最大的那个数的位置，待遍历一遍后再交换位置。
 *    冒泡排序每次比较相邻的两个数大小，并进行位置变动。
 * 
 * 时间复杂度：o(n*n) => (n-1)+(n-2)+……+1 = n*n/2。
 * 空间复杂度：o(1) => 空间利用为常数，1一个记录位置。
 * 稳定性：稳定排序 => 排序前后 相同元素前后顺序不发生改变。
 */
let selectSort = (arr)=>{
    for(let i=0,len=arr.length; i<len-1; i++){
        let k = i;
        for(let j=i+1; j<len; j++){
            k = arr[k] > arr[j] ? j : k;
        }
        if(k != i){
            arr[i] ^= arr[k];
            arr[k] ^= arr[i];
            arr[i] ^= arr[k];
        }
    }
};

//测试
let arr = [6,7,8,4,5,9,3,0,2,1];
selectSort(arr);
console.log(arr);

