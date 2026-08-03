console.log("Hi");{
    let a=10;
    console.log(a);
}
let a=20;
 a=5; //re-declaration
 console.log(typeof(a)); //func for displaying data-type
console.log(a);

const pi=3.1415; //const can't be re-declared
console.log(pi);

var c=10;
c=9; //re-declaration works on var,let not const
console.log(c);