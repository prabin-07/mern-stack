//aaabbcca
//a3b2c2a1
function countChar(a){
    for(let i=0;i<s.length;i++){
        if(s[i] == s[i+1]){
            c++;
        }
        else{
            val += s[i]+c;
            c=1;
        }
    }
    return val;
}

let s = "aaabbcca";
let c = 1;
let val = "";
console.log(countChar(s));