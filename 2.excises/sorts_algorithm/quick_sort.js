/**
 * 快速排序
 */
//1.默认中轴值为a[low]，调整数据位置，使当前数组满足，中轴左侧<=中轴值<=中轴右侧，并返回最终位置
let partition = (arr, low, high) => {
    let pivot = arr[low];
    while(low < high){
        while(low<high && arr[high]>=pivot) high--;
        arr[low] = arr[high];
        while(low<high && arr[low]<=pivot) low++;
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}
//2.根据返回的中轴位置划分，再次调整数据位置
let quick_sort = (arr, low, high) => {
    if(low >= high) return;
    let pivot_num = partition(arr, low, high);
    quick_sort(arr, low, pivot_num);
    quick_sort(arr, pivot_num+1, high);
};
//3.数据测试
arr = [6,7,8,4,5,9,3,0,2,1];
quick_sort(arr,0,arr.length-1);
console.log(arr);