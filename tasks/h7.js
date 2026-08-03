//Count even numbers between 1 and N
let n = 30;
let c = 0;
for(let i=1;i<=n;i++){
    if(i%2==0){
        c++;
    }
}
console.log("Even",c);