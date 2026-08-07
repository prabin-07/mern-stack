// //.A teacher has stored marks of 5 subjects in an array.Write a function to:
// Calculate the total marks.
// Calculate the average.
// Print the grade using the following conditions:
// 90+  → Grade A
// 75+  → Grade B
// 50+  → Grade C
// Below 50 → Fail

function result(res){
    let sum = 0;
    for(let i=0;i<res.length;i++){
        sum += res[i];
    }
    console.log(sum);
    
    if(sum>=90){
        console.log("Grade A");
    }
    else if(sum>=75){
        console.log("Grade B");
    }
    else if(sum>=50){
        console.log("Grade C");
    }
    else{
        console.log("Fail");
    }
    let avg = sum/res.length;
    console.log(avg);
}

let m = [79,85,80,95,90];
result(m);