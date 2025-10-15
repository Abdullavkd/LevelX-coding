document.body.style.background = 'black';


// // make promise from asynchronous to synchronous (this is nested method, but it is very difficult to write and  understand.
// // so we want to write it as promise chaining)
// function main(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("executing 1");
            
//         },3000)
//     })
// }

// main().then((data)=>{
//     console.log(data);
    
//     function main1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("executing 2");
            
//         },2000)
//     })
// }
// main1().then((data)=>{
//     console.log(data);

//     function main2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("executing 3");
            
//         },1000)
//     })
// }
// main2().then((data)=>{
//     console.log(data);
    
// })  
// })
// })




// convert it to promise chaining

function calls(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("chain 3");
    },3000)
    })
}
function calls1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("chain 2");
            
        },2000)
    })
}
function calls2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("chain 1");
            
        },1000)
    })
}


// then() returns a Promise (can check console.log(one))

// in this examples, the function named calls will be called first. when the work of calls() complete, next function will be called as return value of call() and so on.
// so it will work one by one. never overtake.(synchronous)
calls().then((data)=>{
    console.log(data); 
    return calls1()
}).then((data)=>{
    console.log(data);
    return calls2()
}).then((data)=>{
    console.log(data);
})








// this is the original and shortern it on top 
// let one = calls().then((data)=>{
//     console.log(data); 
//     return calls1()
// });

// let two = one.then((data)=>{
//     console.log(data);
//     return calls2()
// })

// two.then((data)=>{
//     console.log(data);
// })