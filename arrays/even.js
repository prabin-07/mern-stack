//Count even no's
let arr = [2,5,7,9,10,23];
let c = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        c++;
    }
}
console.log(c);