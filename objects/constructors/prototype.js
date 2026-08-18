function Student(id,name,age){
    this.id = id;
    this.name;
    this.age;
}

Student.prototype.display = function display(){
    console.log(`${name}`);
}

const student1 = new Student(1,"Prabin",21);
const student2 = new Student(2,"Ajin",21);
console.log(Student.prototype);
console.log(student1.__proto__);