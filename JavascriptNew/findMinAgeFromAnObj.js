//find Aged Person From an Object
let person1 = {
    name: 'Midlaj',
    year: 1989,
    month: "June"
};
let person2 = {
    name: 'Ajmal',
    year: 1997,
    month: 'August'
}
let person3 = {
    name: 'Shabeer',
    year: 1997,
    month: "December"
}
let person4 = {
    name: 'Salman',
    year: 1989,
    month: 'February'
}
let person5 = {
    name: 'Shuaib',
    year: 1989,
    month: 'March'
}

function minAgeFinder(...args){
    let arrAge = args.map(item => item.year);
    let highestAge = Math.min(...arrAge)
    
    
    let personAged = args.filter((item) => {
        let agedArray;
        if(highestAge == item.year){
        agedArray = item;        
        };        
        return agedArray;
    });
    
    personAged.forEach((element) => {
        console.log(element.month);
        
    });
    
    
}
minAgeFinder(person1,person2,person3,person4,person5)





// using OOPs
class Persons {
    constructor(name,year,month){
        this.name = name;
        this.year = year;
        this.month = month;
    }

    static maxAgeFinder(...ages){
        let allyears = ages.map(items => items.year);
        let topYear = Math.min(...allyears);
        ages.forEach((values) => {
            if(topYear == values.year){
                console.log(`Congrats for your Participation ${values.name}`);
                
            }
        })
        
    }
}
let per1 = new Persons("Dulqar",1987,"April");
let per2 = new Persons("Dilshad",1996,"September");
let per3 = new Persons("Nuhman",1987,"October");
let per4 = new Persons("Muhammed",2005,"August");
let per5 = new Persons("Shamil",1987,"November");
// console.log(per1);

Persons.maxAgeFinder(per1,per2,per3,per4,per5)
