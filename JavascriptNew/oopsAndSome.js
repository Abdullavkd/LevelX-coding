// ----------------------------------------------------

// // String congatunation
// const userName = "Abdhulla K";
// const age = 33;

// console.log('welcome '+userName);


// console.log("Welcome " + userName + " your age is " + age);

// // String interpolation
// console.log(`Welcome ${userName}. Your age is: ${age}`)


// function getAge() {
//     a = 10;
//     b = 20;
//     sum = a+b;
//     return sum;
// }

// // Calling a functin is possible inside '${}'
// console.log(`Your answer is ${getAge()}`)

// // ----------------------------------------------------
// Example of coersion
// console.log("Welcome " + userName + " your age is " + age);
// let ageed = 10;
// const ageOfUser = '22';

// console.log(Number(ageOfUser) + 10);

// console.log(ageOfUser + 10)
// console.log(+ageOfUser + 1)
// console.log(Number(ageOfUser) + 1)

// //-----------------------------------------------------

// What is a class
// // OOPs Concept => Object Oriented Programming
// // Example
// class User {
//     age;
//     name;
//     place;

//     constructor(age, name, place) {
//         this.age = age;
//         this.name = name;
//         this.place = place

//         console.log(`Creating an object for ${name}`);
//     }

//     incrimentAge() {
//         this.age+10;
//         console.log(age);
        
//     }

//     getAge() {
//         return this.age;
//     }
// }

// const userObject = new User(22, "abdhulla", "Kozhikode");
// const user1 = new User(24, "Gouri", "Palazhi")
// const user2 = new User(22, "Devika", "koduvally")
// const user3 = new User(33, "Abdhu", "Kozhikode")
// let user4 = new User(33,'Athul','Omassery')

// console.log(user4.getAge());


// // console.log(user1.getAge())

// // user3.incrimentAge();
// // console.log(user3.getAge())

// // --------------------------------------------

// Types of functions

// // Anonimous function
// const welcome = function (userName) {
//     console.log(`Welcome back ${userName}`)
// }
// welcome("Abdhulla");

// // Arrow function
// // What is arrow function?
// // Arrow function in a simplest method of writing an anonimous function;
// const sumTwoNumbers = (num1, num2) => {
//     const sum = num1 + num2;
//     return sum;
// }

// const sum2 = (num1, num2) => num1 + num2;
// const welcome2 = userName => console.log(`welcome user: ${userName}`);

// welcome2("Abdhu");

// let common = ()=>{
//     let i =2;
//     let j = 3;
//     let sum = j+i;
//     console.log(sum);
    
// }
// common()


// create a class
class Students{
    firstName;
    lastName;
    hobbies;

    // constructor Method
    constructor(fName,lName,hobby){
    this.firstName = fName;
    this.lastName = lName;
    this.hobbies = hobby;

    console.log(`Entered Details of ${fName} ${lName}`);
    
    }

    // prototype Method
    fullName(){
        console.log(this.firstName+this.lastName);
        
    }

    // static method
    static fullNameWithHobby(){
        console.log(this.firstName+this.lastName+this.hobbies);
        
    }
}

// inheritance(extends)
// BaseClass = Students (ParentClass)
// derivedClass = TallestStudents (ChildClass)
class TallestStudents extends Students{

    fullName(){
        console.log('It is From Derived Class');
        
    }
}





// creates objects for class (objects of Students class)
let studentOne = new Students('Muhammed','Salim','Play Football');// object one
let studentTwo = new Students('Abdul','Basith','Reading Books');// object two
let studentThree = new Students('Irfan','Ameen','Driving Cars');// object three
console.log(studentTwo.hobbies);
console.log(studentThree);

studentTwo.fullName();

// creates objects for class (objects of TallestStudents class)
let tallOne = new TallestStudents('Jamal','Mahamood','Swimming')
let tlalTwo = new TallestStudents('Ahammed','Kabeer','Teaching')

// calls fullName function that has in BaseClass and DerivedClass
tallOne.fullName();
studentOne.fullName();

