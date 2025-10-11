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
        even: "It is the key of one",
        click: '1'
    },
    {
        odd: "two",
        even: "It is the key of two",
        click: '2'
    },
    {
        odd: "three",
        even: "It is the key of three",
        click: '3'
    },
    {
        odd: "four",
        even: "It is the key of Four",
        click: '4'
    },
    {
        odd: "five",
        even: "It is the key of Five",
        click: '5'
    },
    {
        odd: "six",
        even: "It is the key of six",
        click: '6'
    },
    {
        odd: "seven",
        even: "It is the key of seven",
        click: '7'
    },
    {
        odd: "eight",
        even: "It is the key of eight",
        click: '8'
    },
    {
        odd: "nine",
        even: "It is the key of nine",
        click: '9'
    },
    {
        odd: "zero",
        even: "It is the key of zero",
        click: '0'
    }
];

function main(){
    let divPar = document.createElement("div");
    document.body.appendChild(divPar);
    divPar.setAttribute('style','width: auto; display: flex; justify-content: space-between; height: 100px; flex-wrap: wrap')

    oneDay.forEach(function (i,index) {
        let but = document.createElement("button");
        but.innerHTML = i.odd;
        document.body.appendChild(but);
        but.onclick = callBackNow(i.even);
        divPar.appendChild(but)

        document.addEventListener("keydown",()=> {
            if(event.key === i.click){
                let inner = callBackNow(i.even);
                inner()
            }
        })

        but.setAttribute('style','width: 115px; height: 115px; color: white; background-color: orange; border: none; border-radius: 13px; margin: 3px')
    });
}
let heading = document.createElement("h1");
document.body.appendChild(heading);
heading.setAttribute('style','min-height: 35px')

function callBackNow(now){   
    return function(){
        // alert(now) 
        heading.innerHTML = now; 
    }
};
main();

