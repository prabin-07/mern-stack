//find largest digit in a number
let n = 8753;
let val = n%10;
while(n>0){
    let large = n%10;
    if(large>val){
        val = large;
    }
    n = Math.floor(n/10);
}
console.log(val);