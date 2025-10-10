// closur
// when a child function use the variable of parent function, javascript will save that variable from stack to heap. 
// this process is called closur
function parentOne(num1,num2){
    function getSum(){
        return num1+num2;
        
    }
    return getSum;
}

function calling(){
    let someGetNow = parentOne(10,32);
    let values = someGetNow();
    console.log(values);
    
}
// calling()
// in this example the function named "getSum()" uses variables of function named "parentOne()". it is the parent of that. so the variables of parent function will be added to heap.



// creating buttons and using these ways
let oneDay = [
    {
        odd: "one",
        even: "Hi Guys..."
    },
    {
        odd: "two",
        even: "How are You?"
    },
    {
        odd: "three",
        even: "Are You Fine?"
    }
];

function main(){
    oneDay.forEach((i) => {
        let but = document.createElement("button");
        but.innerHTML = i.odd;
        document.body.appendChild(but);
        but.onclick = callBackNow(i.even);
    });
}
function callBackNow(now){   
    return function(){
        alert(now)  
    }
};
main();
