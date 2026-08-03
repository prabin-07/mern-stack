//Pattern 7 - Print prime rows +1
let n = 7;
for(let i=1;i<=n;i++){
    let c = 0;
    let star = "";
    for(let j=1;j<=i;j++){
        if(i%j==0){
            c++;
        }
        star = star + "*";
    }
    if(c==2){
        console.log(star+"*")
    }
    else{
        console.log(star);
    }
}