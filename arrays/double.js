//Double every element of an array.  

let arr = [1,2,3,4,5,6,7];
let d = [];
let index = 0;
for(let i=0;i<arr.length;i++){
    d[index] = arr[i]*2;
    index++;
}
console.log(d);