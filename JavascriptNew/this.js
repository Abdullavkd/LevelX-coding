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
objTwo.c.call(obj,3,5)
