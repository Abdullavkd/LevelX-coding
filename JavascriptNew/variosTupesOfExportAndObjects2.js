
// it is an example for importing of default export
import one from './variosTupesOfExportAndObjects1.js'
one()


// it is an example for importing of named export
import { twoTest } from './variosTupesOfExportAndObjects1.js';
twoTest();


// it is an example for importing of named export a variable
import { varOne } from './variosTupesOfExportAndObjects1.js';
console.log(varOne);


// it is an example for importing of named export an object
import { objOne } from './variosTupesOfExportAndObjects1.js';
console.log(objOne);


// we can call all exports in one import as an object
import * as anyName from './variosTupesOfExportAndObjects1.js';
console.log(anyName);







// // we can import all exports together through another way.
// import { objOne,varOne,twoTest } from './variosTupesOfExportAndObjects1.js';