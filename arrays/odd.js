//Count odd no's
let arr = [10,3,5,12]
let c = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        c++;
    }
}
console.log(c);