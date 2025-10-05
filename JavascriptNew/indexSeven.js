// // to control the numbers after deciaml point (toFixed())
// let num = 34.343434;
// console.log(num.toFixed(1));// answer: 34.3

// // test 
// let str = "Hello Guys...";
// str.test = 5;
// console.log(str.test);//undefined

// //Data Types
// // Make Shorten Number writing
// let number = 100000;
// let number1 = 10_0_00_0;
// let number2 = 1e5;
// console.log(number,number1,number2);

// let mcs = 0.000001;
// let mcs1 = 1e-6;
// console.log(mcs,mcs1);

// let one = 342;
// console.log(one.toString(10));

// console.log(341..toString(16));

// let common = 1e500;
// alert(common)
// alert(999999999999999999)
// console.log(999999999999999999);
// console.log(0.1+0.2);
// console.log(0-0);

// let call = +prompt("Enter a Number");
// console.log(typeof(call));
// console.log(isFinite(call));

// // Object.is Uses for comparing between two like ===
// let a = NaN;
// let b = NaN;
// console.log(Object.is(a,b));

// console.log(parseInt('ff',16));
// console.log(parseFloat("34.34edk"));

// //task 
// let num1 = +prompt("Enter 1st Number");
// let num2 = +prompt("Enter 2nd Number");
// alert(+num1 + +num2);
// alert(num1+num2);

// alert(6.35.toFixed(1))

// // test
// function readNumber(){
//     let one;
//     do{
//         one = prompt("Enter a Number")
//     }while(!isFinite(one))  
//     if(one == null || one == "") return null;
//     return +one;
// }
// alert(readNumber());

// function random(min,max){
//     return min+Math.random() * max - min;
// }
// console.log(Math.trunc(random(2,700)));
// console.log(Math.trunc(random(2,700)));
// console.log(Math.trunc(random(2,700)));
// console.log(Math.trunc(random(2,700)));
// console.log(Math.trunc(random(2,700)));

// function random(min,max){
//     return (Math.random() * max+min);
// }
// console.log(Math.trunc(random(2,7)));
// console.log(Math.trunc(random(2,7)));
// console.log(Math.trunc(random(2,7)));
// console.log(Math.trunc(random(2,7)));
// console.log(Math.trunc(random(2,7)));







// function randomNumber(min,max){
//     let result = min + Math.random() * (max-min)
//     return result;
// }
// console.log(Math.round(randomNumber(2,7)));
// console.log(Math.round(randomNumber(2,7)));
// console.log(Math.round(randomNumber(2,7)));


// function randomNumber0(min,max){
//     return min + Math.random() * (max - min);
// }
// console.log(Math.trunc(randomNumber0(1,3)));
// console.log(Math.trunc(randomNumber0(1,3)));
// console.log(Math.trunc(randomNumber0(1,3)));