//Create a Person class with properties name and age, and a method introduce that logs a message like "Hi, my name is [name] and I am [age] years old."
class Person{
    constructor(Name, Age){
        this.Name=Name;
        this.Age=Age;
    }
    introduction(){
        console.log(`Hi, my name is ${this.Name} and I am ${this.Age} years old.`)
    }
}
let Hero = new Person("Chandish", 22);
Hero.introduction();