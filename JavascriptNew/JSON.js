document.body.style.background = 'black';


let intiger = 12;
let Jintiger = JSON.stringify(intiger)
console.log(Jintiger);
let ReInteger = JSON.parse(Jintiger)
console.log(ReInteger);



let string = 'it is a string';
let Jstring = JSON.stringify(string)
console.log(Jstring);
let ReSring = JSON.parse(Jstring)
console.log(ReSring);


const arr = [2,4,5,7,'dom','bag'];
let Jarr = JSON.stringify(arr)
console.log(Jarr);
let ReArr = JSON.parse(Jarr)
console.log(ReArr);


const obj = {name: 'ball', place: 'palakkad'};
let Jobj = JSON.stringify(obj)
console.log(Jobj);
let ReObj = JSON.parse(Jobj)
console.log(ReObj);


const boolean = true;
let Jboolean = JSON.stringify(boolean)
console.log(Jboolean);
let ReBoolean = JSON.parse(Jboolean)
console.log(ReBoolean);


const Null = null;
let Jnull = JSON.stringify(Null)
console.log(Jnull);
let ReNull = JSON.parse(Jnull)
console.log(ReNull);
