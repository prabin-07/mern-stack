//Remove all occurrences of a specific character from a string
function removeChar(str, char){
    let newStr = "";
    for(let i=0;i<str.length;i++){
        if(str[i] != char){
            newStr += str[i];
        }
    }
    console.log(newStr);
}

let s = "apples";
let ch = "p";
removeChar(s,ch);