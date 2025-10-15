document.body.style.background = "black";

function func1(){
    return new Promise((resolve,reject)=>{
        if(10>1){
            resolve("It is True One");
        }else{
            reject("It is False One");
        }
    })
}
function func2(){
    return new Promise((resolve,reject)=>{
        if(10>50){
            resolve("It is True Two");
        }else{
            reject("It is False Two");
        }
    })
}
function func3(){
    return new Promise((resolve,reject)=>{
        if(10>9){
            resolve("It is True Three");
        }else{
            reject("It is False Three");
        }
    })
}

func1().then((data)=>{
    console.log(data);
    return func2();
}).then((data)=>{
    console.log(data);
    return func3();
}).then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
    
})