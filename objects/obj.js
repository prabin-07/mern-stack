//create an object, print all the property names using a loop.
let cars = {
    brand : "Nissan",
    model : "Patrol",
    engine : "3.5 L VR35DDTT twin-turbo V6"
};

// for(let key in cars){
//     console.log(cars[key]);
// }


let c = 0;
for(let key in cars){
    c++
    console.log(cars[key]);
}
console.log("Count:",c);  //count incorporated