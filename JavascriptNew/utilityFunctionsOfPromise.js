document.body.style.background = 'black';


// promise.resolve()
let cache1 = {
        name: 'Thahir',
        place: 'Alappuzha'
    }
let cache2 = null;
let cache3 = {
        name: 'Jubair',
        place: 'Koduvally'
    }

    // if we return the cache1 without convert to the promise.resolve()(without convert to Promise),there will be ann error.
    // because when we call isbania().then, it will return the value cache. its not a Promise, but we calls with .then().
    // so now we want to convert it to promise. so we use promise.resolve(). 

    // and we only gives the promise.resolve() only for first function calling, because, the second and third time we calling the function as return of then().
    // everytime return value of then() is promise. so there no need to convert to promise.
function isbania(){
    if(cache1){
        return Promise.resolve(cache1);
    }
    return new Promise((resolve,reject)=>{
    resolve('There is no value on cache for one');
    })
}
function isfahan(){
    if(cache2){
        return cache2;
    }
    return new Promise((resolve,reject)=>{
    resolve('There is no value on cache for two');
    })
}
function ignite(){
    if(cache3){
        return cache3;
    }
    return new Promise((resolve,reject)=>{
    resolve('There is no value on cache for three');
    })
}

isbania().then((data)=>{
    console.log(data);
    return isfahan();
}).catch((data)=>{
    console.log(data);
    return {}
}).then((data)=>{
    console.log(data);
    return ignite();
}).then((data)=>{
    console.log(data);
})