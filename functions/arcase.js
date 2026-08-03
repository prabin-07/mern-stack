//Area of circle,rect,sq using function and case
let length=10;
let width=30;
let side=25;
let radius=7;
let find = 1;

switch(find){
    case 1:
        square(side);
        function square(s){
        sq=s*s;
        console.log("area of square is", sq);
    }
    break;
    case 2:
        rectangle(length,width);
        function rectangle(l,b){
            area=l*b;
            console.log("area of rectangle is",area);
        }
        break;
        
        case 3:
            circle(radius);
            function circle(r){
            ac=3.14*r*r;
            console.log("Area of circle is",ac);
        }
        break;
        default:
            console.log("Enter a valid input");
}