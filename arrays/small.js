//Smallest element in array
let arr = [10,15,5,29];
let s = arr[0];

for(let i=1;i<arr.length;i++){
    if(arr[i]<s){
        s = arr[i];
    }
}
console.log(s);