//Check if a number is palindrome or not
function checkP(){
    while(t>0){
        r = r*10 + t%10;
        t = Math.floor(t/10);
    }
    if(r==n){
        console.log("Palindrome!");
    }
    else{
        console.log("Not palindrome");
    }
}

let n = 101;
let t = n;
let r = 0;
checkP();