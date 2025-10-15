class Student{
    constructor(one){
        this.button = document.createElement('button');
        this.button.innerHTML = one;
        document.body.appendChild(this.button);
    }

    // setter(to set a value as simple)
    set width(width){
        this.button.style.width = width+'px';
    }
    set height(height){
        this.button.style.height = height+'px';
    }

    // getter(to get a value that is given by setters we want to set getters)
    get height(){
        return this.button.style.height;  
    }

}
let button1 = new Student("Click Me!");

button1.width = 100;
button1.height = 100;
console.log(button1.width);// we sets a setter and if we try to console that, the resutl will  be undefined. 
// so if we want to console that, we want to set getters.

console.log(button1.height);// now it will console the currect hieght.
// if we want to cunvert it to number, use parseInt()

