//Prime upto n
let n = 15;
for(let i=2;i<=n;i++){
    let p = 0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            p++;
        }
        }
        if(p==2){
            console.log(i);
    }
}