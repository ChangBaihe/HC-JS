/**
 * 冒泡排序
 */
var bubbleSort = (arr)=>{
    for(var i=0,len=arr.length; i<len; i++)
        for(var j=0; j<len-1-i; j++)
            if(arr[j] > arr[j+1]){
                arr[j] ^= arr[j+1];
                arr[j+1] ^= arr[j];
                arr[j] ^= arr[j+1];
            }
    return arr;
};

//测试
let arr = [6,7,8,4,5,9,3,0,2,1];
bubbleSort(arr);
console.log(arr);

