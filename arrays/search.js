let arr = [10,2,3,5,1,9];
let se = 0;
let flag;

for(let i=0;i<arr.length;i++){
    if(se==arr[i]){
        flag=true;
    }
}
if(flag==true){
console.log("Element found");
}
else{
console.log("Element not found");
}