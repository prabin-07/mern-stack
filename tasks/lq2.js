let n = 10001;
let r = 0;

while(n>0){
    if(n%10==0){
        r++;
    }
    n=Math.floor(n/10);
}
console.log(r);