//Merge two arrays

let a1 = [1,2,3,4,5];
let a2 = [6,7,8,9,10];
let mArray = [];
let val = 0;

for(let i=0;i<a1.length;i++){
    mArray[val]=a1[i];
    val++;
}

for(let i=0;i<a2.length;i++){
    mArray[val]=a2[i];
    val++;
}

console.log(mArray);