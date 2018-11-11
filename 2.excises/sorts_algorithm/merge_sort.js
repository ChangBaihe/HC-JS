/**
 * 归并排序(2路归并)
 */
//1.两两归并
let merge = (arr,low,mid,high)=>{
    let temp = arr.slice(low,high+1);
    let t_mid = mid-low, t_high = high-low;
    let i = 0, j = t_mid+1, k = low;
    for(; i<=t_mid && j<=t_high; k++){
        if(temp[i] > temp[j]){
            arr[k] = temp[j++];
        }else{
            arr[k] = temp[i++];
        }
    }
    //合并后，复制剩余项
    while(i <= t_mid) arr[k++] = temp[i++];
    while(j <= t_high) arr[k++] = temp[j++];
};
//2.递归分割，low>=high停止分割
let mergeSort = (arr,low,high)=>{
    if(low >= high) return;
    let mid = low + Math.floor((high-low)/2);
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,high);
    merge(arr,low,mid,high);
};

//测试
arr = [6,7,8,4,5,9,3,0,2,1];
mergeSort(arr,0,arr.length-1);
console.log(arr);