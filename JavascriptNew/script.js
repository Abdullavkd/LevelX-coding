let inp = document.querySelector('h1');


// // part 3
// let num1 = 11;
// let num2 = 33;
// let result = num1+num2;

// console.log(`Sum is ${result}`);


// let inp = document.querySelector('h1');
// inp.innerText = `Sum is : ${result}`;

// //Work
// let myName = "Abdulla";
// console.log(myName);
// inp.innerText = `My Name Is ${myName}`







//Part 4,5,6
//Array Syntax

// let arr = ["Apple","Orange","Cucumber","Mango","Pineapple"];
// console.log(arr[1])


// // Method 1
// let ulHtml = document.querySelector('.arr-ul');
// for(let i=0; i<arr.length; i++){
//     let li = document.createElement("li");
//     li.innerText = arr[i];
//     ulHtml.appendChild(li);
//     console.log(li);
// }


// //Method 2
// let ulHtml = document.querySelector('.arr-ul');
// arr.forEach(function(i){
//     let li = document.createElement("li");
//     li.innerHTML = i;
//     ulHtml.appendChild(li)
//     console.log(li);
// })




//Part 7 (Pushing Data From Html To Javascript)
// //push
// let allItems = [];
// let items = document.querySelectorAll('li');
// items.forEach(function(itemvalue){
//     allItems.push(itemvalue.innerHTML)
// })
// console.log(allItems);


//pop, shift, unshift, push
// let sampleArray = ["Book","Pen","Pencil","Paper"];
// sampleArray.pop(); //to remove one from the ending og the array
// sampleArray.shift(); //to remove one from the starting of the array
// sampleArray.unshift("Box"); // to add one to starting of the array
// sampleArray.push("Eraser"); // to add  one to ending og the array
// console.log(sampleArray)




// //Part 8 (foreach function again)
// let sampleArr = ["one","two","three","four"]
// sampleArr.forEach(function(value,index){ //value is 0-lengh of array contents, index is 0-lenght of array
//     console.log(`${sampleArr.length-index} ${value}`)
// })




//part 9, 10 (functions , parameters and arguments)
// function functionClass(num1,num2){
//     let sum = num1+num2;
//     inp.innerText = sum;
//     console.log(sum)
// }
// functionClass(2,1);
// functionClass(4,6);



