document.body.style.background = 'black';


// calling a function immediately when it created is called immediately invoked function.
(function(value){
    console.log("hi Guys..."+value);
    //we can pass argument here
    // these two brackets are the calling.
}("10 Times"));

(function(){
    let yellow = document.getElementById('yellow');
    yellow.style.background = 'yellow';
    yellow.onclick = ()=>{
        console.log("Yellow Button Clicked!"); 
    };
    let green = document.getElementById('green');
    green.style.background = 'green';
    green.onclick = ()=>{
        console.log("green Button Clicked!"); 
    };
    let orange = document.getElementById('orange');
    orange.style.background = 'orange';
    orange.onclick = ()=>{
        console.log("orange Button Clicked!"); 
    };
    let blue = document.getElementById('blue');
    blue.style.background = 'blue';
    blue.onclick = ()=>{
        console.log("blue Button Clicked!"); 
    };

}())