let s="hello world hi";
let cse= s.toUpperCase();
let sp="";
for(let i=0;i<cse.length;i++){
    if(cse[i]!=" "){
        sp+=cse[i];
    }
    else{
        if(sp.length>5){
            console.log(sp);
        }
            sp="";
        }    
}
if(sp.length>5){
    console.log(sp);
}