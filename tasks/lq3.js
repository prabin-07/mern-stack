let n = 222232;
let r = 0;

while(n>0){
    if(n%2==0){
        r++;
    }
    n=Math.floor(n/10);
}
console.log(r);