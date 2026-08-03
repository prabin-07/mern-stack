// Find the sum of all digits in a string (e.g., "a1b2c3" → 6)
function sumStr(str){
    for(let i=0;i<str.length;i++){
        if(Number(str[i])){
            sum += Number(str[i]);
        }
    }
    return sum;
}

let s = "he11o";
let sum = 0;
console.log("Sum of digits in string:", sumStr(s));