//Prime or not
let n = 6;
let c = 0;
for(let i=1;i<=n;i++){
    if(n%i==0){
        c++;
    }
}
if(c==2){
    console.log("Prime!");
}
else{
    console.log("Composite");
}