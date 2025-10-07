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

// // String Method - indexOf()
// let call = "It is the book of Sulthan";
// console.log(call.indexOf('the'));
// console.log(call.indexOf("i"));
// console.log(call.indexOf("weight"));
// console.log(call.indexOf("t"));
// console.log(call.indexOf("t",2));

// //Search indexes of a letter from an Array
// let sen = 'it is a book, that is created to impress him';
// let z = 0;
// while(true){
//     let tes = sen.indexOf("i",z)
//     if(tes == -1)break;

//     console.log(`position: ${tes}`);
//     z = tes+1;    
// }

// let sen = 'it is a book, that is created to impress him';
// let z = -1;
// while((z = sen.indexOf('i',z+1)) != -1){
//     console.log(`Position ${z}`);
// }

// // String Method - includes()
// let calls = 'Hi gus..., Are you free today. did you have any busy'
// console.log(calls.includes('y',52));
// console.log(calls.includes('y',51));
// console.log(calls.length);

// // String Methods - startsWtith(),endsWith()
// let common = "Punctuality";
// console.log(common.startsWith("Pun"));
// console.log(common.startsWith("unc"));
// console.log(common.endsWith("ty"));
// console.log(common.endsWith("it"));

// // String Method - slice(), substring(), substr(), all are used to get substring from a string
// let chocolate = "Community";
// console.log(chocolate.slice(0,3));
// console.log(chocolate.slice(3));
// console.log(chocolate.slice(-3));
// console.log(chocolate.slice(-4,-1));
// console.log(chocolate);

// // if the first argument is greater than second, substring will swap them, but slice never do it.
// let pepper = "Functionality";
// console.log(pepper.substring(2,6));// ncti
// console.log(pepper.substring(6,2));// ncti
// console.log(pepper.substring(-6,-2));// no result
// console.log(pepper.substring(-2,-6));// no result

// // the first argument will consider the startin index, and second argument will consider the lenght of substring
// let banana = "Technology";
// console.log(banana.substr(3,5));
// console.log(banana.substr(-4,3));

// // All alpahbets and special charectors have a unique numeric value, to find it codePointAt(0)
// console.log("c".codePointAt(0));

// // To find alphabets or special charector of a number fromCodePoint()
// console.log(String.fromCodePoint(49));
// console.log(String.fromCodePoint(89));

// let tot = '';
// for(i = 65 ; i<=220 ; i++){
//     tot+=String.fromCodePoint(i)
// }
// console.log(tot);

// // localeCompare()
// console.log("E".localeCompare("E"));
// console.log("E".localeCompare("a"));

// console.log("E".localeCompare("F"));


// // Arrays
// let oneday = ["Computer","Mobile"];
// let twoday = oneday;
// console.log(twoday,oneday);
// twoday.push("Tablet");
// console.log(twoday,oneday);

// // for of loop
// let arr = ["common", "Public", "Private"]
// for (let i of arr){
//     console.log(i);   
// }

// //for of loop
// let obj = {Name:"Badusha",Place: "Kottayam",age: "31"};
// for(let i in obj){
//     console.log(`${i}: ${obj[i]}`);
// }

// let come = [];
// come[5] = 43;
// come[4] = 32;
// come[1] = 33;
// come[0] = '';
// console.log(come);// seeing empty space in array

// let array = [1,3,4];
// array.length = 2;
// array.length = 4;
// console.log(array);

// // Multidimensional array
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[1][2]);

// let ar = [5,4,'common','blood',''];
// console.log(ar+1);
// console.log([]+5);
// console.log([3]+5);
// console.log([4,3,5,6]+5);

// // test
// let arrow = ['Jazz','Blues'];
// console.log(arrow);
// arrow.push("Rock-n-Roll");
// console.log(arrow);
// arrow.splice(1,1,'Classics');
// console.log(arrow);
// arrow.shift();
// console.log(arrow);
// arrow.unshift("Rap",'Reggae');
// console.log(arrow);

// // test
// let style = ['one','two','three'];
// style.push(function(){
//     console.log(this);
    
// })
// console.log(style);
// style[3]();

// function sumInput(){
//     let sum = 0;
//     let arr = [];
//     let value;
    
//     do{
//         value = (prompt('Enter Numbers to Calculate'));
//         if(isFinite(value)){
//             arr.push(value)
//         }

//     }while(value != null && isFinite(value));
    
//     for(let z of arr){        
//         sum+=Number(z);        
//     }
//     return i;
// }
// alert(sumInput());

// function calcMaxSum(...arr){
//     let maxSum = 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         let testMax = 0;
//         for(let j = i ; j < arr.length ; j++){
//             testMax+=arr[j];
//             maxSum = Math.max(testMax,maxSum);
//         }
//     }
//     return maxSum
// }
// console.log(calcMaxSum(3,-2,3,67,-100,23));

// function calcMaxSumFast(...array){
//     let maxSum2 = 0;
//     let testMax2 = 0;
//     for(let i of array){
//         testMax2 += i;
//         maxSum2 = Math.max(maxSum2,testMax2);
//         if(testMax2 < 0) testMax2 = 0;
//     }
//     return maxSum2;
// }
// console.log(calcMaxSumFast(3,-2,3));

// // Array Methods
// // slice
// let arr = ['come','go','start','end','eat'];
// let arrow = arr.slice(1,3);
// console.log(arrow,arr);

// // concat
// let arr = [3,6,4,3];
// let arr1 = [1,2,3,4];
// let arr2 = [9,8,7,6];
// let allArray = arr.concat(arr1,arr2);
// console.log(arr,allArray);

// // concat with object
// let arr = [1,2,3];
// let obj = {
//     one:'OK',
//     two:'Ohh',
// }
// console.log(arr.concat(obj));

// let arr = [1,2,3];
// let obj = {
//     0:"OK",
//     1:'Ohh',
//     [Symbol.isConcatSpreadable]:true,
//     length:2
// }
// console.log(arr.concat(obj));

