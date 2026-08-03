//check whether a number ends with 0
let n = 0;
if(n==0){
    console.log(n,"is zero");
}
else if(n!=0){
    let ld = n%10;
    if(ld==0){
        console.log(n,"Ends with 0");
    }
    else{
        console.log(n,"doesn't end with 0");
    }
}