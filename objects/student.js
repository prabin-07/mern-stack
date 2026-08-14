//Create an object named student with the following:
// name
// age
// course
// Add a function display() that prints:
// Name: John
// Age: 20
// Course: MERN Stack

let student = {
    name : "John",
    age : 20,
    course : "MERN Stack",
    
    display : function(){
        for(let val in student){
            if(typeof student[val]!=="function"){
                console.log(val,":",student[val]);
            }
        }
    }
};

student.display();