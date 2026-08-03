//Find words that start with vowels
let w = "icecream es is";
let w1 = "";
for(let i=0;i<w.length;i++){
    if(w[i]!=" "){
        w1+=w[i];
    }
    else{
        if(w1[0]=='a' || w1[0]=='e' || w1[0]=='i' || w1[0]=='o' || w1[0]=='u'){
            console.log("vowel");
        }
        else{
            console.log("no vowel");
        }
        w1="";
    }
}
if(w1[0]=='a' || w1[0]=='e' || w1[0]=='i' || w1[0]=='o' || w1[0]=='u'){
            console.log("vowel");
        }
        else{
            console.log("no vowel");
        }