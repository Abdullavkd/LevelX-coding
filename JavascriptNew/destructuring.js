// Array Destructuring
const arr = [23,13,54,43];
const [one,two,three,four] = arr;
console.log(three);



// Object Destructuring
const object = {
    Name: 'Abishar',
    Place: 'Vellikkunn',
    State: 'Kerala'
}

const {Name,State,Place} = object;
console.log(Place);




// Nested Destructuring
// Array
const sharp = [[34,54,65],2,5,3,6,[1029,3409,394]];
let [[z,x,y],a,b,c,d,[yes,no,ok]] = sharp;
console.log(no);

// Object
let shape = {
    name: 'salim',
    age: '33',
    features:{
        play: 'football',
        study: 'Maths'
    }
}
let {name,age,features,features:{play,study}} = shape;
console.log(name,features);
console.log(play);
