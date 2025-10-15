//REVERSE

// Make Asynchronous Using Callback Function...
// function func1(){
//     setTimeout(()=>{
//         console.log("This is inner Text of setTimeout function");
        
//     },3000)
//     console.log("This is Outer and second But , It will be Published before Inner Text");
    
// }
// func1();


// //Make Asynchronous Using Promise Function...
// function forPromise(){
//     return new Promise((resolve,reject)=>{
//         if(2<1){
//             resolve("This if True")
//         }else{
//             reject("This is False")
//         }
//     })
// }
// forPromise().then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// });

// async function tryAwait(){
//     let common = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Inner Html")
//         })  
//     })
//     console.log(await common);
    
// }
// tryAwait();

// //concat Array Method
// let arr1 = [1,4,2,5];
// let arr2 = [9,6,7,8];
// let arrAll = arr1.concat(arr2);
// console.log(arrAll);

// // Spread Operator
// let arr1 = [1,4,2,5];
// let arr2 = [9,6,7,8];
// let arrAll = [...arr1,...arr2];
// console.log(arrAll);

// // Rest Operator
// let sum = 0;
// function sample(...combo){
//     for(var i=0 ;i<combo.length ;i++){
//         sum+=combo[i];
//     }
//     return sum;
// }
// console.log(sample(2,4,6,8,10,100));

// //Array Method includes
// arr = [1,4,6,8,5];
// console.log(arr.includes(2));// true/false


// // Loops in Javascript
// // For Loop
// for(var i=0;i<5;i++){
//     console.log(i);
// }

// // While Loop
// let i = 0;
// while(i<7){
//     console.log(i);
//     i++;
// }

// // Do While Loop
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i>4);

// // For of Loop
// let arr = [2,3,5,6,4];
// for(let i of arr){
//     console.log(i);
// }

// //For in Loop
// let object = {
//     Name: "Abdulla",
//     Place: "Vennakode",
//     Id: "Cp"
// }
// for(let i in object){
//     console.log(object[i]);
    
// }


// //Replace for Sring
// let common = "Enter Your Name";
// console.log(common);
// let commonNew = common.replace("Name","Number");
// console.log(commonNew);

// // Slice To add Value inside of an Array
// arr = ["a","b","c","d","e"];
// arrNew = arr.splice(2,1,"Added Value");
// console.log(arr);
// console.log(arrNew);

// // Array Method indexOf
// arr = [3,4,6,7,5,5,4];
// console.log(arr.indexOf(4))

// // Array Method includes
// arr = [3,4,6,7,5,5,4];
// console.log(arr.includes(1)); //true/false

// // Array Method map()(if didn't set return value, value will be undefined)
// arr = [3,5,6,7,8,4];
// let mapFunction = arr.map((value,index)=>{
//     if(value%2==0){
//         return value
//     }
// })
// console.log(mapFunction);

// let array = [1,2,5,7,7,8];
// let arraAssign = array.map((value,index)=>value>4)
// console.log(arraAssign);

// //Array Method filter()(if didn't set return value, value will be null)
// let filterFunction = arr.filter((value)=>{
//     if(value%2==0){
//         return value
//     }
// })
// console.log(filterFunction);

// let array = [1,2,5,7,7,8];
// let arraAssign = array.filter((value,index)=>value>4)
// console.log(arraAssign);


// // Array Method Reduce()
// arr = [3,5,7,10];
// let sum = arr.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// })
// console.log(sum);

// // Array Method forEach()
// arr = [10,20,30,40,50];
// sum = 0;
// arr.forEach((data) => {
// sum+=data;
// });
// console.log(sum);


// // Destructuring in Loops and Objects
// arr = [2,4,7,4,6,55,77,34];
// console.log(arr[3]);
// let [z,x,v,g] = arr;
// console.log();

// obj = {name: "Abdulla", place: "Vennakode", Id: "vkd"}
// console.log(obj.place);
// let {name,place,Id} = obj;
// console.log(place,Id,name);



// // destructuring
// // Array
// let arr = [3,46,7,8,4];
// let [a,b,c,d,e] = arr;
// console.log(a,b,e);

// // Object
// let obj = {
//     name: "salman",
//     age: 31,
//     hobby: 'play',
//     extra: 'skills'
// }
// let {age,hobby,name,extra} = obj;
// console.log(extra);

