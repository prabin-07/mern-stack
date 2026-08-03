//Armstrong number
let n = 153;
let t = n;
let c = 0;
let r;
let s = 0;
while(n>0){
    c++;
    n = Math.floor(n/10);
}
n=t;
while(t>0){
    r = t%10;
    s+=r**c;
    t=Math.floor(t/10);
}
if(s==n){
    console.log("Armstrong");
}
else{
    console.log("Not Armstrong");
}