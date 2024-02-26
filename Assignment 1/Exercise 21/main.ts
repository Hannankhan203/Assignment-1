// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Person{
    name: String;
    age: Number;
    email: String;
}
function createPerson(name:String, age:number, email:String): Person{
    return{
        name: name,
        age: age,
        email: email
    };
}
const Person1: Person = createPerson("Hannan Khan", 20, "ak181837@gmail.com");

console.log("Name : ", Person1.name);
console.log("Age : ", Person1.age);
console.log("Email : ", Person1.email);
