let a = 10;
let b = 20;
if(a>0 && b>0){
    console.log("both numbers are positive");
    if(a>b){
        console.log(a,"is greater");
    }
    else{
        console.log(b,"is greater");
    }
}
else if(a==0 || b==0){
    console.log("its 0");
}
else{
    console.log("both numbers aren't positive");
}