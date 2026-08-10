// Remove all occurrences of a particular number from an array
let arr = [2,5,7,2,9,15,20,5];
let num = 5;
let result = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] != num){
        result.push(arr[i]);
    }
}
console.log(result);