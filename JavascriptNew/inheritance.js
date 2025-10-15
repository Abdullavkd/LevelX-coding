document.body.style.background = 'black';

class Button{
    constructor(action){
        this.button = document.createElement('button');
        this.button.innerHTML = action;
        document.body.appendChild(this.button);
        // this.action = action;
        console.log('First Constructor');
        
    }
    click(para){
        this.button.onclick = para;
    }
}

class ColorButton extends Button{
    //if we create a construction on child class, we should call the constructor of parent class.
    // how to call constructor of parent class? ans: call super();
    constructor(){
        super()
        console.log('Second Constructor');
        
    }
    click(para){
        this.button.onclick = function(){
            this.button.style.background = 'yellow';
            // console.log(this);
                        
            para();
        }.bind(this)
    }
}
// if we want to call anything from child class to parent class, we can use "super" key ,like we use "this" key.
// now we can call click function of parent class using super like "sper.click()".



let buttonOne = new ColorButton('Click Me!');
buttonOne.click(function(){
    console.log("Clicked Me");
    
});