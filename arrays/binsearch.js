//Binary search
let arr = [12,10,14,17,8,5,6];
let se = 14;
let temp;
let low=0;
let high=arr.length-1;
for(let i=0;i<=arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
for(let i=0;low<=high;i++){
    let mid=Math.floor((low+high)/2);
    if(arr[mid]==se){
        console.log("Found",se);
        break;
    }
    else if(se>arr[mid]){
        low=mid+1;
    }
    else if(se<arr[mid]){
        high=mid-1;
    }
}