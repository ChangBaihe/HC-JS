/**
 * 堆排序
 */
 //1、调整子堆结构顺序
 let adjust_heap = (arr, k, len)=>{
    let temp = arr[k];
    for(let i=k*2; i<=len; i*=2){
        if(i+1<=len && arr[i]<arr[i+1]){
            i++;
        }
        if(arr[i] > temp){
            arr[k] = arr[i];
            k = i;
        } else {
            break;
        }
    }
    arr[k] = temp;
 };
 //2、构建大顶堆
 let bulid_max_heap = (arr, len)=>{
    for(let i=Math.floor(len/2); i>=0; i--){
        adjust_heap(arr, i, len);
    }
 };
 //3、循环调整堆顶
 let heap_sort = (arr)=>{
    let len = arr.length-1;
    bulid_max_heap(arr,len);        //初始化大顶堆
    for(let i=len; i>=0; i--){
        let temp = arr[0];          //重置堆顶
        arr[0] = arr[i];
        arr[i] = temp;
        adjust_heap(arr, 0, i-1);   //不断调整堆结构
    }
 };
 //测试数据
let arr = [6,7,8,4,5,9,3,0,1,2];
heap_sort(arr);
console.log(arr);