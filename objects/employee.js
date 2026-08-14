// Properties
// ->name
// ->salary
// Method
// ->increment(percent)
// Example
// Salary = 30000
// increment(10)
// Output
// 33000

let employee = {
    name : "Prabin",
    salary : 75000,

    increment : function(percent){
        let pc = this.salary*(percent/100);
        console.log(this.salary+pc);
    }
};

employee.increment(10);