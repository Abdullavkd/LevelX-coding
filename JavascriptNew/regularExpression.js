document.body.style.background = 'black';

let input = document.createElement("input");
document.body.appendChild(input);
input.placeholder = "dd-mm-yyyy";
// input.value = 'cat'

// call when click button
let inputValue;
function clickNow(){
    inputValue = input.value;

    // check is conditions of variable condition matches with inputValue.
    let check = condition.test(inputValue)
    console.log(check);

    // make focus input space every time.
    input.focus()
}

// start with an alphabet, and contains only a-z,0-1
// let condition = /^[a-z][a-z0-9]*$/im;
let condition = /^([012]?\d|3[01])-([0]?\d|1?[012])-([1]9[5-9]\d|[2]0(?:[01]\d|[2][0-5]))*$/i;


// create button.
let button = document.createElement('button');
button.innerHTML = 'Click Me!'
button.onclick = clickNow
document.body.appendChild(button);




let inputDate = document.createElement("input");
document.body.appendChild(inputDate);
inputDate.placeholder = "dd-mm-yyyy";


let inputAgainValue;
function clickNowAgain(){
    inputAgainValue = inputDate.value;

    // check is conditions of variable condition matches with inputValue.
    let checkTwo = inputAgainValue.match(condition)
    console.log(checkTwo);

    if(checkTwo === null){
        console.log("Error");
    }else{
        return '';
    }
    // make focus input space every time.
    inputDate.focus()
}

// create button.
let buttonAgain = document.createElement('button');
buttonAgain.innerHTML = 'Click Me Again!'
buttonAgain.onclick = clickNowAgain
document.body.appendChild(buttonAgain);