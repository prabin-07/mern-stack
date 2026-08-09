//Find common elements from two arrays

let a1 = [1,2,3,4];
let a2 = [5,3,2,7,4];
let cArray = [];
let val = 0;

for(let i=0;i<a1.length;i++){
    for(let j=0;j<a2.length;j++){
        if(a1[i]==a2[j]){
            cArray[val]=a1[i];
            val++
        }
    }
}
console.log(cArray);