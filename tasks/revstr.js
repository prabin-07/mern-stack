//Reverse a string
let s = "Hello";
let rst = "";
for(let i=s.length-1;i>-1;i--){
    rst += s[i];
}
console.log(rst);