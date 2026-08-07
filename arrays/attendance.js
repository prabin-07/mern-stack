// 1.A classroom attendance is stored as "PPAAPPPAPPA where P → Present, A → Absent,Write a program to count:
// Total Present
// Total Absent

let str = "PPAAPPPAPPA";
let lower = str.toLowerCase();
let arr = lower.split("");
let pr = 0;
let ab = 0;
for(let value of arr){
    if(value == 'p'){
        pr++;
    } else if(value == 'a'){
        ab++;
    }
}
console.log("Total present is",pr);
console.log("Total absent is",ab);