let a=10;
let b=0;
let opr=4;
switch(opr){
    case 1:
        console.log(a+b);
        break;
    case 2:
        console.log(a-b);
        break;
    case 3:
        console.log(a*b);
        break;
    case 4:
        if(b==0){
            console.log("Not possible");
            break;
        }
        console.log(a/b);
        break;
    case 5:
        console.log(a%b);
        break;
    default:
        console.log("Not valid");
}