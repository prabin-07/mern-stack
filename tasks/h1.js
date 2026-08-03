let n = 50;

if(n>0 && n<=100){
    console.log("Value in range!");
    if(n%5==0){
        console.log(n,"is divisible by 5");
    }
    else{
        console.log(n,"is not divisible by 5");
    }
}
else{
    console.log("Value not in between 0 and 100");
}