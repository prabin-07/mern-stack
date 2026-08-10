// Find the first repeated element.
let arr = [90,87,23,13,23,44,50];
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] == arr[j]){
            console.log(arr[i]);
            i = arr.length;
            break;
        }
    }
}