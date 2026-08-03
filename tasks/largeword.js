//Largest word in a sentence
let s = "hello good morning";
let w = "";
let lw = "";
for (let i = 0; i <= s.length; i++){
    if (s[i] !== " " && i !== s.length){
        w += s[i];
    }
    else{
        if (w.length > lw.length){
            lw = w;
        }
        w = "";
    }
}
console.log("Largest word:", lw);