//To check whether a number is armstrong or not
function isArm(){
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
        return "Armstrong";
    }
    else{
        return "Not Armstrong";
    }
}

let n = 153;
let t = n;
let r;
let c = 0;
let s = 0;
console.log(isArm());