//create a student Object with following properties ->name,age,city and print all the values
let student = {
    name : "Prabin",
    age : 21,
    city : "Kottayam"
};

student.course="MERN"; //Add new field "Course"
console.log(student);

for(let key in student){ //Update student age
    if(student.age=21){
        student.age=22;
    }
}
console.log("Updated:",student);

delete student.city; //Deleting a property from the object
console.log("City property removed:",student);