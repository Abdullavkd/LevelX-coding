document.body.style.background = 'black';

// // synchronous
// function firstSync(){
//     console.log("fisrt Synchronous");
    
// }

// function secondAsync(){
//     // asynchronous
//     setTimeout(()=>{
//         console.log("second Asynchronous");
        
//     },1000)
// }

// // synchronous
// function thirdSync(){
//     console.log("third Synchronous");
// }
// firstSync()
// secondAsync()
// thirdSync()


// // normally every functions are synchronous (line by line execution and neven exicute a line before complete the task of the line that stands before that line)
// // normally every event functions are asynchronous, it never wait a line or a code to work.



// Promise
function testPromise(greater){
    return new Promise((resolve,reject)=>{
        if(greater >9){
            setTimeout(()=>{
            resolve("It is Highest Value");
            },1000)
        }else{
            setTimeout(()=>{
            reject("It is Smallest Value");
            },1000)
        }
    })    
}
testPromise(10).then((data)=>{
    console.log(data);
    
}).catch((data)=>{
    console.log(data);
})


// async await
let oneday;
async function asyncTest(){
    let onn = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("It is the Test!");
        },1000)
    })
    console.log(await onn);   
}
asyncTest();






// callback
// there is no content inside of this function. so when calls it, an argument will be passed. it will happen.
function mian(get){
    
}
// this is the function that when call it , console "Hi guys..."
function second(){
    console.log("Hi guys...");
    
}
// passes the function another function as argument.
mian(second())

// we can write this to a simple method
function mainOne(get){
    get();
}
mainOne(()=>{
    console.log("Hi Friends...");
    
})
