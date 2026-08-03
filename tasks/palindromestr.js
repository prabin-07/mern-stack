//Palindrome string or not
let s = "malayalam";
let rst = "";
for(let i=s.length-1;i>-1;i--){
    rst += s[i];
}
if(s==rst){
    console.log("Palindrome string");;
}
else{
    console.log("Not palindrome");
}