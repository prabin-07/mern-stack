//Move all zeroes to the end of an array. 

let arr = [2,3,0,3,0,7];
let j = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j++;
    }
}
console.log(arr);