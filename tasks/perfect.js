//Perfect number
let n = 28;
let s = 0;
for(let i=1;i<n;i++){
    if(n%i==0){
        s+=i;
    }
}
if(s==n){
    console.log("Perfect number");
}
else{
    console.log("Not perfect");
}