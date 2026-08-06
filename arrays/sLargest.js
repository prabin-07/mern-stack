let arr = [45,50,90,65];
let l = arr[0];
let sl = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>l){
        l = arr[i];
    }
}

for(let i=0;i<arr.length;i++){
    if(arr[i]>sl && arr[i]<l){
        sl=arr[i];
    }
}

console.log(sl);