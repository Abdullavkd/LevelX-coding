function prototypeTest(name,age){
    console.log(name);
    this.age = age;
    

}
let prototype = new prototypeTest("Abdulla",33);

prototypeTest.prototype.incAge = function (){
    console.log(this.age+10);
    
};

prototype.incAge()