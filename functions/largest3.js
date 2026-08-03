//To find largest of three numbers
function largest(no1,no2,no3){
    
    if(no1>no2){
        if(no1>no3){
            console.log(no1, "is largest")
        }
    }
    else{
        if(no2>no3){
            console.log(no2, "is largest")
        }
        else{
            console.log(no3,"is largest")
        }
    }
}
let n1= 10;
    n2=20;
    n3=90;
largest(n1,n2,n3);