let m = 2;
let yr = 2005;
switch(m){
    case 1:
        console.log("January");
        console.log(("31 Days"));
        break;
    case 2:
        console.log("February");
        if(yr%4==0){
            console.log("29 Days");
            break;
        }
        else{
            console.log("28 Days");
            break;
        }
    case 3:
        console.log("March");
        console.log("31 days");
        break;
    case 4:
        console.log("April");
        console.log("30 Days");
        break;
    case 5:
        console.log("May");
        console.log("31 Days");
        break;
    case 6:
        console.log("June");
        console.log("30 Days");
        break;
    case 7:
        console.log("July");
        console.log("31 Days");
        break;
    case 8:
        console.log("August");
        console.log("31 Days");
        break;
    case 9:
        console.log("September");
        console.log("30 Days");
        break;
    case 10:
        console.log("October");
        console.log("31 Days");
        break;
    case 11:
        console.log("November");
        console.log("30 Days");
        break;
    case 12:
        console.log("December");
        console.log("31 Days");
        break;
    default:
        console.log("Not a valid entry");
}