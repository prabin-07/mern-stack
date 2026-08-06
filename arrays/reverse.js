let arr = [10,12,14,16];
let rev = [];
let a = 0;

for(let i=arr.length-1;i>=0;i--){
    rev[a] = arr[i];
    a++;
}

console.log(rev);