document.body.style.background = 'black';

// it is an example for named export of variable
export let varOne = "it is variable"

// it is an example for named export of an object
export let objOne = {
    1:'fist obj',
    2:'second obj'
}

// in a file, there is only one default export. because when we import a default export, we use any name to import that.
// so if we created more default exports in a file, we can't call them. if we tried to create more default export in a file, there will see an error.
export default function oneTest(){
    console.log("this is test One");
}

// it is an example for named export of a function
export function twoTest(){
    console.log("this is test two");
    
}

function threeTest(){
    console.log("this is test three");
    
}




// // we can export all more things together. and we can change name for export from here.
// export{
//     varOne,
//     objOne,
//     oneTest,
//     twoTest,
//     threeTest as common
// };