//Sort array in ascending order
let arr = [78,2,1,8,7,5,4];
let temp;
for(let i=0;i<=arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);