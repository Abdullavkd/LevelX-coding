document.body.style.background = 'black';

// // normal Promise
// function common(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hi Sir");
//         })
//     })
// }

// common().then((data)=>{
//     console.log(data);
    
// })



// async, await
function common1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hi Sir");
        })
    })
}

toCall();
async function toCall(){
//     common1().then((data)=>{
//     console.log(data);
// })

let one = common1()
console.log(await one);


}








// let forTest = function(){
//         setTimeout(()=>{
//         return "Hi guys..."
//     })
//     }
//     let one = await forTest();
    
// console.log(one);