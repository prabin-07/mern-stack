//find smallest digit in a number
let n = 1432;
let val = n%10;
while(n>0){
    let small = n%10;
    if(small<val){
        val = small;
    }
    n = Math.floor(n/10);
}
console.log(val);