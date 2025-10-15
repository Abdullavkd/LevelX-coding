// reduce()

let arr = [
    {
        name: 'Ismayeel',
        mark: 348,
        status: 'Pass'
    },
    {
        name: 'Abishar',
        mark: 458,
        status: 'Pass'
    },
    {
        name: 'Binshad',
        mark: 179,
        status: 'Fail'
    }
];

// array
function allNow(){
    return arr.reduce((total, items) => { 
        total.push(items.mark)       
        return total
    },[])
}
console.log(allNow());

// object
function allNowTwo(){
    return arr.reduce((total, items) => {   
        total[items.name] = items.mark; 
        return total
    },{})
}
console.log(allNowTwo());

// it will be used to became an array to one resutl
// so we can use it to get some of an array
// the first argument of the callback function on reduce is the second argument of reduce.
// the second argument of the callback function on reduce is the each values of array.
// if there didn't set second argument for reduce, the first argument of callback is firt value of array and second argument of callback will start from second value of array.

// when complete each values of array, the resutl will go to the first argument of callback function of reduce.