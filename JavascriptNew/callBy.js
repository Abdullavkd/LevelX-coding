function one(){
    let a = 100;
    two(a)
    console.log("One: "+a);
    
}

function two(para){
    let ans = para*2;
    console.log("Two: "+ans);
    
}
one()
// parameter in this example is Number
// so whem we change the value of variable from the function, it never affect the main variable.

//<------------------------------------------>

function three(){
    let a = {
        nown: 120
    }
    four(a)
    console.log("One: "+a.nown);
    
}

function four(para){
    para.nown = para.nown*2;
    console.log("Two: "+para.nown);
    
}
three()
// parameter in this example is object
// so when we change the value of the onject from function, it will affect the main object

//<--------------------------------------------->

function five(){
    let a = [23,41];
    six(a)
    console.log("One: "+a[1]);
    
}

function six(para){
    para[1] = para[1]*2;
    console.log("Two: "+para[1]);
    
}
five()
// parameter in this example is array
// so when we change the value of the array from function, it will affect the main object

//<--------------------------------------------->

function seven(){
    let a = {
        value: 250
    };
    eight(a);
    console.log("One: "+a.value);
    
}

function eight(para){
    para = {
        value: 2992
    };
    console.log("Two: "+para.value);
    
}
seven();
// parameter in this example is object
// but still when i changed some chages in that object, main object won't be changed. 
// because, in this example i created another object on that object, so if we did like it, the old object won't be changed.
// if we created a new object on an object that is get as parameter, in the main object never happen anything.