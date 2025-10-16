document.body.style.background = 'black';


// // promise.resolve()
// let cache1 = {
//         name: 'Thahir',
//         place: 'Alappuzha'
//     }
// let cache2 = null;
// let cache3 = {
//         name: 'Jubair',
//         place: 'Koduvally'
//     }

//     // if we return the cache1 without convert to the promise.resolve()(without convert to Promise),there will be ann error.
//     // because when we call isbania().then, it will return the value cache. its not a Promise, but we calls with .then().
//     // so now we want to convert it to promise. so we use promise.resolve(). 

//     // and we only gives the promise.resolve() only for first function calling, because, the second and third time we calling the function as return of then().
//     // everytime return value of then() is promise. so there no need to convert to promise.
// function isbania(){
//     if(cache1){
//         return Promise.resolve(cache1);
//     }
//     return new Promise((resolve,reject)=>{
//     resolve('There is no value on cache for one');
//     })
// }
// function isfahan(){
//     if(cache2){
//         return cache2;
//     }
//     return new Promise((resolve,reject)=>{
//     resolve('There is no value on cache for two');
//     })
// }
// function ignite(){
//     if(cache3){
//         return cache3;
//     }
//     return new Promise((resolve,reject)=>{
//     resolve('There is no value on cache for three');
//     })
// }

// isbania().then((data)=>{
//     console.log(data);
//     return isfahan();
// }).catch((data)=>{
//     console.log(data);
//     return {}
// }).then((data)=>{
//     console.log(data);
//     return ignite();
// }).then((data)=>{
//     console.log(data);
// })









// // promise.reject()
// let case1 = {
//         name: 'Thahir',
//         place: 'Alappuzha'
//     }
// let case2 = null;
// let case3 = {
//         name: 'Jubair',
//         place: 'Koduvally'
//     }

// function isbania1(){
//     if(case1){
//         return Promise.reject(case1);
//     }
//     return new Promise((resolve,reject)=>{
//     resolve('There is no value on cache for one');
//     })
// }
// function isfahan1(){
//     if(case2){
//         return case2;
//     }
//     return new Promise((resolve,reject)=>{
//     resolve('There is no value on cache for two');
//     })
// }
// function ignite1(){
//     if(case3){
//         return case3;
//     }
//     return new Promise((resolve,reject)=>{
//     resolve('There is no value on cache for three');
//     })
// }

// isbania1().then((data)=>{
//     console.log(data);
//     return isfahan1();
// }).then((data)=>{
//     console.log(data);
//     return ignite1();
// }).then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
//     return {}
// })




// // promise.all()
// // it is used to call all promise tohether. and give then() after the closing of promise.all() once
// // there is no need to repeat then()
// // it will be used in a situation that we no need to execute all objects one by one
// // when we call with promise.all(), if a promise action completed, it will work. it may be the first or second or any other function.
// function isbania1(){
//     return new Promise((resolve,reject)=>{
//     resolve('There is no value on cache for one');
//     })
// }
// function isfahan1(){
//     return new Promise((resolve,reject)=>{
//     resolve('There is no value on cache for two');
//     })
// }
// function ignite1(){
//     return new Promise((resolve,reject)=>{
//     resolve('There is no value on cache for three');
//     })
// }
// Promise.all([
//     isbania1(),
//     isfahan1(),
//     ignite1()]
// ).then((data)=>{
//     console.log(data);
// })







// Promise.rase()
// if we calls three promises together and we want to print first completed function, we will use Promise.race().
// it will publish first completed result of promise()
function isbania1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve('There is no value on cache for one');
        })
    },1000)
    
}
function isfahan1(){
        return new Promise((resolve,reject)=>{
    resolve('There is no value on cache for two');
    }) 
}
function ignite1(){
    return new Promise((resolve,reject)=>{
    resolve('There is no value on cache for three');
    })
}

Promise.race([isbania1(),isfahan1(),ignite1()])
.then((data)=>{
    console.log(data);
    
})