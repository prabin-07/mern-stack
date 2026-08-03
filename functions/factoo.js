function fact(fc){
    let f = 1;
    for(let i=1;i<=fc;i++){
        f *= i;
    }
    return f;
}
let n = 5;
let f = fact(n);
console.log(f);