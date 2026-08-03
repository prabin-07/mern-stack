//Write a program to calculate area of rectangle,circle and square using functions

function square(s){
    sq=s*s;
    console.log("area of square is", sq)

}
function rectangle(l,b){
        area=l*b;
        console.log("area of rectangle is",area);
    }
    
    function circle(r){
        ac=3.14*r*r;
        console.log("Area of circle is",ac)
    }

let length=10;
let width=30;
let side=25;
let radius=7;
square(side);
rectangle(length,width);
circle(radius);