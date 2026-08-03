//pattern 3
let n = 4;
for(let i=1;i<=n;i++){
    let r = "";
    for(let j=1;j<=i;j++){
        r+="*";        
    }
    console.log(r);
}
for(let i=n-1;i>=1;i--){
    let r = "";
    for(let j=1;j<=i;j++){
        r+="*";        
    }
    console.log(r);
}