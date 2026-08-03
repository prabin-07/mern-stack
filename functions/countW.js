//Count the no of words in a sentence
function wordCount(str){
    let spl = str.split(" ");
    let wc = 0;
    for (let i = 0; i < spl.length; i++){
        if(spl[i] !== ""){
            wc++;
        }
    }
    return wc ;
}

let s = "hello hy hi";
console.log("No of words:", wordCount(s));