document.body.style.background = 'black';

let obj = {
    name: "Abdulla",
    age: 31
}

function small({name,age}){
    console.log(name,age)
}
small(obj)