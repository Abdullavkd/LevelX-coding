document.body.style.background = 'grey';


// try ,catch, finally, throw

// the first function will return 19 to num1 variable.
// the second function will return 23 to num2 variable.
// the third function will return sum of one and two sum variable.


function one(){
    
    return 19;
}
function two(){
    // throw gives us a chance to make an erron. innertext of throw will go to the parameter of catch.
    throw("This is an error")
    return 23;
}
function three(a,b){
    return a+b;
}

let num1;
let num2;


try{
    num1 = one();
}catch(b){
    // the parameter of catch will recieve contern of throw.
    num1 = 0;
}finally{
    console.log('it is finally for num2'); 
}
try{
    // try will work every time( if worked try, catch or not,it will work)
    num2 = two();
}catch(a){
    // the parameter of catch will recieve contern of throw.
    num2 = 0;
    console.log(a);
    
}finally{
    console.log('it is finally for num1'); 
}

let sum = three(num1,num2);
console.log(sum);