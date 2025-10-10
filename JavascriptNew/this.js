obj = {
    a: "Father",
    b: "Mother",
    c: function(){
        console.log(this);
        
    }
}
let today = obj.c;
console.log(obj.a);
obj.c();// In this situation the Meaning of "this" is obj(object), scope of the function

today();// In this situation the Meaning of "this" is window, scope of today variable
// it means "this" inside an anonimous function works as the scope of caller
// in the first example -obj.c- there calling c, so the scope of c is obj
// in the second example -today- there calling today, so there is no scope for today, so it will call the window

// <------------------------------------------------------------------->

objOne = {
    a: "Father",
    b: "Mother",
    c: () => {
        console.log(this);
        
    }
}
let todayOne = objOne.c;
console.log(objOne.a);
objOne.c();// in this situation the meaning of "this" is the parent function of the function , so there is no parent function for the arrow function here. so it call window
todayOne();// in this situation also same.
// it means "this" inside an arrow function works as the scope of parent function of arrow function. it never consider the caller. it is the difference between noraml anonimous function and arrow function in usage.

//<------------------------------------------------------------------>

objTwo = {
    a: "Father",
    b: "Mother",
    c: function (one,two){
        let sum = one+two;
        console.log(this, sum);
        
    }
}
let todayTwo = objTwo.c;
objTwo.c.call(objTwo,3,5);// in this situation we are setting a scope for the function. call() method is used to set a scope for a fucntion when calls it.
// the first argument of "call()" is the block name that we want to set, and second and third so on arguments are the arguments for passing to the function.
todayTwo.call(objTwo,10,11);
// both examples -obj.c.call(objTwo,3,5) & todayTwo.call(objTwo,10,11) - are equal. becuase, the fisrt method of call() in both examples are same. so they will set the scope of the function as obj object.

//<------------------------------------------------------------------------>

objThree = {
    a: "Father",
    b: "Mother",
    c: function (one,two){
        let sum = one+two;
        console.log(this, sum);
        
    }
}
let todayThree = objThree.c;
objThree.c.apply(objThree,[10,34]);
todayThree.apply(objThree,[100,200])
// basically call() and apply() are same. usage and result of both are same. but there is a small difference between them when give arguments inside of them. 
// when give arguments on call(), first argumetn is the scope name that want to set and next and next , all  parameters  that want to send to the function.
// when give arguments on apply(), first argument is the scope name that want to set and next is an array of arguments that want to send to the function.

//<----------------------------------------------------------------->

objFour = {
    a: "Father",
    b: "Mother",
    c: function (one,two){
        let sum = one+two;
        console.log(this, sum);
        
    }
}
let todayFour = objFour.c.bind(window);// bind() is used to set a scope for a function. in this example, if we called the variable - todayFour - anywhere, the scope of -objFour.c - is window
let todayFourEx = objFour.c.bind(objFour);//  if we called the variable - todayFourEx - anywhere, the scope of -objFour.c - is objFour

todayFour(1000,2000);
todayFourEx(90,80);

// call() is used to set scope when call the function
// apply() is used to set scope when call the function 
            // difference between call() and apply() is in sending argumentd
// bind() is used to set scope when creates the function or assign the function to a variable.

// if the function is arrow function, call(), apply() and bind() are never work. every time the scope of arrow function is the scope of parent function of it.

// <-------------------------------------------------------->

class comma{
    day = {
        first: "Hundred",
        second: "Thousand",
        third: () => {
            console.log(this);
            
        }
    }
}
let daysobj = new comma()
let community = daysobj.day.third;
community();// in this situation the parent of arrow function is the class named comma.
daysobj.day.third()
daysobj.day.third.call(comma.day)

//<----------------------------------------------------------------->

class Brackets{
    day = {
        first: "Hundred",
        second: "Thousand",
        third: function(){
            console.log(this);
            
        }
    }
}
let daysOneobj = new Brackets()
let communityOg = daysOneobj.day.third;
communityOg();// in this situation there is no parent function for the function named "third" so , normally "this" will call the window, but here, it never call the window, but it will give output as undefined.
// because, if a function inside of a class and there is no parent function for it, if there was called "this", the output will be undefined.
daysOneobj.day.third()// object day
daysOneobj.day.third.call(daysOneobj)// class Brackets
communityOg.call(window) // window