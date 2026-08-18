function Student(id,name,age){ //Constructor - uses PascalCase
    this.id = id;
    this.name = name;
    this.age = age;
}

//Values inserting to the constructor
const student1 = new Student(1,"Prabin",21);
const student2 = new Student(2,"Jithu",21);

console.log(student1);