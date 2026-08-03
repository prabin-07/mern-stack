let a=10;
let b=12;
let c=10;

if(a==b && b==c){
    console.log("Equilateral triangle");
}
else if(a==b || b==c || c==a){
    console.log("Isosceles Triangle");
}
else{
    console.log("Scalene triangle");
}