// function testOne(val){
//     return function(value){
//         return val+value;
//     }
// }
// let testCall = testOne(5);
// console.log(testCall(7));


// // fake data fetching using Promise
// function testFakeFetch(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             fetch('https://jsonplaceholder.typicode.com/todos/28/dk').then((data) =>{
//                 if(data){
//                     resolve (data)
//                 }else{
//                     reject('there is an error')
//                 }
//             }) 
//         },1000)
        
//     })
// }
// testFakeFetch().then((data) => {
//     console.log(data);
    
// }).catch((data) => {
//     console.log(data);
    
// })




// // Higher order function
// let one = 1;
// function oneOne(func){
//     func(one++)
//     func(one++)
//     func(one++)
//     func(one++)
//     func(one++)
// }
// oneOne((data)=>{
// console.log(data);

// })
// console.log(one);


// // currying
// function one(a){
//     return function(b){
//         return function(c){
//             console.log(a*b*c);
            
//         }
//     }
// }
// one(2)(3)(4)


// console.log([] + []);      // ?
// console.log([] + {});      // ?
// console.log({} + []);      // ?
// console.log(true + false); // ?
// console.log(5 + "5");      // ?
// console.log("5" - 3);      // ?



// a powerful task
async function commonOne(prArr,limit){
    let i;
    for(i = 0; i<limit; i++){
        
         
    }
    // for(i;i<prArr.length; i++){
    //     prArr[i].then((data) => {
    //         console.log(await data);
            
    //     })
    // }  
}
let arr = [
    () => new Promise(resolve => setTimeout(() => resolve("Task One Started"))),
    () => new Promise( resolve => setTimeout(() => resolve("Task Two Started"))),
    () => new Promise( resolve => setTimeout(() => resolve("Task Two Started")))
];
commonOne(arr,2)