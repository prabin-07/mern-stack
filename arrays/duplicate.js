//Remove duplicate values
let arr = [10,12,34,12];
let uar = [];

for(let i=0;i<arr.length;i++){
    let duplicate=false;
    for(let j=0;j<arr.length;j++){
        if(arr[i]===uar[j]){
            duplicate = true;
            break;
        }
    }
    if(duplicate==false){
        uar.push(arr[i]);
    }
}
console.log(uar);