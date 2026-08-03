//Occurence of a character
let s = "malayalam";
let oc = "a";
let c = 0;
for(let i=1;i<=s.length-1;i++){
    if(oc==s[i]){
        c++;
    }
}
console.log(c);