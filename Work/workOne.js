document.body.style.backgroundColor = 'black';

// map()
// multiply each values in this array by 2
let arr1 = [1,5,2,8];
let arr2 = arr1.map(item => item*2);
console.log(arr2);

//-----------------------

// console firt name with last name
let arrName = [{first: 'Alice', last: 'Smith'}, {first: 'Bob', last: 'Johnson'}, {first: 'Charlie', last: 'Brown'}];
let arrNameResult = arrName.map(item =>  `${item.first} ${item.last}`);
console.log(arrNameResult);

//-------------------------

// find the square of each values and add 1 
let numArr = [3,0,4,2];
let numArrResult = numArr.map(item => item**2+1);
console.log(numArrResult);

//--------------------------



//filter()

// print even numbers
arrForEven = [12, 5, 8, 17, 20, 3];
let arrForEvenResult = arrForEven.filter(item => item % 2 == 0);
console.log(arrForEvenResult);

//--------------------------

// print the words that are 
let animalArr = ['cat', 'dog', 'elephant', 'mouse', 'giraffe'];
let animalArrResult = animalArr.filter(item => (item.length >= 5));
console.log(animalArrResult);

//--------------------------

let active = [{name: 'A', isActive: true}, {name: 'B', isActive: false}, {name: 'C', isActive: true}];
let activeResutl = active.filter(item => (item.isActive == true));
console.log(activeResutl);

//--------------------------




// reduce()
let sum = [10, 5, 2, 3];
let calculateSum = sum.reduce((sum,item) => sum+=item,0);
console.log(calculateSum);

//---------------------------

let findCount = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let foundCount = findCount.reduce((acc,item) => {
    acc[item] = (acc[item]||0)+1;
    return acc;
},{})
console.log(foundCount);

//--------------------------

let nestedOne = [[1, 2], [3, 4, 5], [6]];
let nestedToOne = nestedOne.reduce((acc,value)=>{
    return acc.concat(value);
},[])
console.log(nestedToOne);

//--------------------------




//forEach()
let colors = ['red', 'green', 'blue'];
colors.forEach((item,index) => {
    console.log(`${index}: ${item}`);
})

//--------------------------

let outArr = [5, 10, 1];
let value = 0;
outArr.forEach(item => {
    value+=item;
})
console.log(value);

//---------------------------

let small = ['hello', 'world', 'js'];
let capitalize = [];
small.forEach(item => {
    capitalize.push(item[0].toUpperCase()+item.slice(1));
})
console.log(capitalize);
