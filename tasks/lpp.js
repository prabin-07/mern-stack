//Pattern 6
let n = 7;
for(let i=1;i<=n;i++){
    let p = "";
    let ptn;
    if(i==1 || i==2){
        ptn=2;
    }
    else if(i%2 == 0){
        ptn = i;
    }
    else{
        ptn = i*2;
    }
    for(let j=1;j<=ptn;j++){
        p += "*";
    }
    console.log(p);
}