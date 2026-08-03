//Pattern 8 - Pattern of factorials
let n = 4;
let val = 1;
for(let i=1;i<=n;i++){
    val *= i;
    console.log("*".repeat(val));
}