//Remove all negative numbers from an array.

let arr = [2,-2,55,-76,50,-5];
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        arr.splice(i,1);
        i--;
    }
}
console.log(arr);