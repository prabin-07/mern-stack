// Find the missing number from an array containing numbers from 1 to 10

let arr = [1,2,3,5,6,7,8,9,10];
let start = 1;
let end = 10;
let sum = 0;
let miss = 0;
for(i=start; i <= end; i++){
    sum += i;
}
if(arr.length == end-1){
    for(i = 0; i < arr.length; i++){
        miss += arr[i];
    }
    console.log("Missing number is", sum-miss);
} else if(arr.length == end){
    console.log("No missing numbers");
}