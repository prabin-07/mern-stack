// let cars = {
//     brand : "Suzuki",
//     model : "Swift",
// };

// let x = "brand";
// console.log(cars);
// console.log(cars.brand);
// console.log(cars.model);
// console.log(cars[x]); //displays value that's passed into another variable
// console.log(cars['model']); //Displays model name using []
// delete cars.brand; //deleted brand 
// console.log("Brand:",cars); 
// cars.engine="G16B";//engine name inserted
// console.log("Engine: ", cars.engine)

// for(let val in cars){
//     console.log(cars[val]); //indexing can only be accessed by using []
// }

let a = [1,2,3]; //Array using for-in loop
for(let value in a){
    console.log(a[value])
}