// Check if a string contains only alphabets
function sumStr(sr){
    let str = sr.toUpperCase();
    for(let i=0;i<=str.length-1;i++){
        if((str[i]<="A" && str[i]>="Z")){
            return "Alphabets"
        }
    }
    return "Consonants"
}

let s = "h4llo";
console.log(sumStr(s));