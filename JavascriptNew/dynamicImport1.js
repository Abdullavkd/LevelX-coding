document.body.style.background = 'black';


export function createButton(name,func){
    let button = document.createElement("Button");
    button.innerHTML = name;
    document.body.appendChild(button);
    button.onclick = func
}
