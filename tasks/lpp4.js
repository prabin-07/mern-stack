//Pattern 9 - Using perfect squares
let n = 7;
for(let i=1;i<=n;i++){
    let val = Math.sqrt(i);
    if(Number.isInteger(val)){
        console.log("*".repeat(i*2));
    }
    else{
        console.log("*".repeat(i));
    }
}