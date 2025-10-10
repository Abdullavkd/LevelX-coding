class Bike{

    // constructor Method
    constructor(name,model,company,price){
        this.name = name;
        this.model = model;
        this.company = company;
        this.price = price;
    }

    // Prototype Method
    bikeDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Model: ${this.model}`);
        console.log(`Companny: ${this.ompany}`);
        console.log(`Price: ${this.price}`);
    }
    showPriceOnRoad(){
        let onRoad = this.price + (this.price/100*30);
        console.log(onRoad);
        
    }
}

let bikeOne = new Bike('Pulsur','Normal','Bajaj',129000);
let bikeTwo = new Bike('Buller','Powerful','Enfield',187000);
let bikeThree = new Bike('Fz','Sports','Yamaha',153000);

bikeThree.showPriceOnRoad()
