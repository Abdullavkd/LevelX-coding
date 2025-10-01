// console.log(`Hi Guys...`);

//Promise 

// function display(){

//     return new Promise((Resolve,Reject)=>{
//         if(90<3){
//             setTimeout(()=>{
//                 Resolve("Tis is Ready");
//             })
//         }else{
//             setTimeout(()=>{
//                 Reject("This is False");
//             })
//         }
//     })
// }


// display().then((data)=>{
//     console.log(data);
// }).catch((ans)=>{
//     console.log(ans);
    
// });




// //Async await
// async function asyncAwaitTest(){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("It is From DOM");
//         },2000)
//     })

//     console.log(await promise);
//     document.getElementById("head").innerHTML = await promise;
// }
// asyncAwaitTest();



// //Test<------------------------------------>
// function testone(){
//     console.log(name);
//     console.log(founder);
    
//     let name = "Abdulla";
//     var founder = "Sulthan";
    
// }
// testone();

// function sum(num1,num2){
//     return num1+num2;
// }

// console.log(sum(10,"4"));

// const func1 = ()=> console.log("First");
// const func2 = ()=> setTimeout(()=> console.log("Second"));
// const func3 = ()=> console.log("Third");

// func2();
// func1();
// func3();

// for(var i=0; i<3 ;i++){
//     setTimeout(()=> console.log(i),1000);
// }

// for(let i=0; i<3 ;i++){
//     setTimeout(()=> console.log(i),1000);
// }


// function common(a,b,c,d,e,f,g,h,i,j){
    
//     return a+b+c+d+e+f+g+h+i+j;
// }

// function community(...all){
//     var sum = 0;
//     for(var i=0; i<all.length;i++){
//         sum += all[i];
//     }
//     return sum;
// }

// console.log(common(1,2,3,4,5,6,7,8,9,10));
// console.log(community(1,2,3,4,5,6,7,8,9,10));


// //Two Arrays Into One
// arr1 = [2,4,6,8]
// arr2 = [1,3,5,7,9]

// arrAll = arr1.concat(arr2);
// console.log(arrAll);

// arrInOne = [...arr1,...arr2];
// console.log(arrInOne);
