let obj = {
    name : "prabin",
    age : 21,
    place : "kottayam"
};

console.log(Object.keys(obj)); //Displays only keys
console.log(Object.values(obj)); //Displays only values
console.log(Object.entries(obj)); //Displays the key-value pairs
console.log(obj1 = Object.assign({},obj)) //Assigns the key-value to another object and displays as 2D array
console.log(Object.freeze(obj)); //Editing this object doesn't work
obj.place="kerala";
console.log(Object.isFrozen(obj)); //Checks if the object is frozen
console.log(obj.hasOwnProperty("location")); //Checks if a property exists in an object. object_name should be used at the front unlike the other functions.