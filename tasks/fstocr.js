//Find the first occurrence of a character
let s = "welcome";
let oc = "m";
for(let i=0;i<=s.length-1;i++){
    if(oc==s[i]){
        console.log(i);
        break;
    }
}