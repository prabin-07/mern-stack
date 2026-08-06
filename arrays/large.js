//Largest element in array
let arr = [1,43,50,200];
let l=0;
for(let i=1;i<arr.length;i++){
    if(arr[i]>l){
        l=arr[i];
    }
}
console.log(l);