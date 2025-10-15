

let obj = {
    name: 'Iqbal',
    age: 23,
    address:{
        place: 'Vennakode',
        dist: 'Calicut',
        country: 'India'
    }
}
// normal copy
let object = obj;
console.log(object);

object.name = 'Salman';
console.log(obj);


// shallow copy 
let object1 = {...obj};
object1.name = 'Ibrahim';
object1.address.place = 'Islamabad';
console.log(obj,object1);


// Deep copy
let object2 = JSON.parse(JSON.stringify(obj));
object2.address.place = 'Palestine';
console.log(object2,obj);

