// alert("Enter");//a Popup Message
// prompt("Enter a Value");//an input space on Popup
// confirm("Are You Ok");//a yes or no confirmation on Popup


// let value = true;
// alert(typeof(value));//will view boolean

// value = String(value);//convert boolean to String
// alert(typeof(value));// wil view String


// //when apply an arithmetic operator to a string value
// // it will automatically convert to Number
// let Numeric = "9"/"3";
// alert(Numeric);


// //and also we can use Number() function to convert to Number
// let type = "123";
// alert(typeof(type));

// type = Number(type);
// alert(typeof(type));

// // if not the string a number, the answer will convert to NaN
// let string = "It is a String Value";
// string = Number(string);
// alert(typeof(string));

// alert(Number("9458"));//answer 9458
// alert(Number("123c"));//answer NaN
// alert(Number(true));//answer 1
// alert(Number(false));//answer 0


// //Convert to boolean
// alert(Boolean(1));//True
// alert(Boolean(0));//False
// alert(Boolean("hello"));//True
// alert(Boolean(""));//False
// alert(Boolean(2));//True

// //Arithmatic Operators
// alert(2**2);
// alert(3**4);

// let one = -3;
// alert(+one);//-3

// let two = true;
// alert(+two);//1
// let three = false;
// alert(+three);//0

// let four = "hi";
// alert(+four);//Nan
// let five = "";
// alert(+five);//0


// //How to add two Numbers in String 
// let apple = "5";
// let orange = "3";
// alert(apple+orange);//"53"
// alert(+apple + +orange);//8


// let sharp = (1+2,4+2,8+9);//works the last expression only
// alert(sharp);//answer is 17

// //an Assignment
// alert("" + 1 + 0)
// alert("" - 1 + 0)
// alert(true + false)
// alert(6 / "3")
// alert("2" * "3")
// alert(4 + 5 + "px")
// alert("$" + 4 + 5)
// alert("4" - 2)
// alert("4px" - 2)
// alert("  -9  " + 5)
// alert("  -9  " - 5)
// alert(null + 1)
// alert(undefined + 1)
// alert(" \t \n" - 2)


// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12
// alert(+a + +b); // 3

// //String Comparison
// alert("a" < "z");//true
// alert("Glow" < "Glp");//true
// alert("and" < "ane");//true
// alert("a"<"a")//false
// alert("2"==2);//true
// alert(true == 1);//ture
// alert(false == 0);//true

// alert( null === undefined ); // false
// alert( null == undefined ); // true
// alert(null == 0);//flase
// alert(null > 0);//false
// alert(null < 0);//false
// alert(null >= 0);//false

// alert( undefined > 0 ); // false
// alert( undefined < 0 ); // false
// alert( undefined == 0 ); // false
// alert(undefined >= 0); // false
// alert(undefined <= 0); // false
// alert(undefined === 0); // false
//The equality check returns false because undefined only equals null, undefined, and no other value.


// //Tasks
// alert(5 > 4); //true
// alert("apple" > "pineapple"); //false
// alert("2" > "12"); //true
// alert(undefined == null); //true
// alert(undefined === null); //false
// alert(null == "\n0\n"); //false
// alert(null === +"\n0\n"); //false


// //If condition task
// let abd = prompt("Enter a Number");
// if(abd > 0){
//     alert(1);
// }else if(abd < 0){
//     alert(-1);
// }else if(abd == 0){
//     alert(0);
// }

// let abd = prompt("Enter a Number");
// (abd > 0)?
//     alert(1):
//     (abd < 0)?
//     alert(-1):
//     // (abd == 0)?
//     alert(0);

// alert(!!1);// true
// alert(Boolean(1))// true

// alert( null || 2 || undefined );// 2(first true value)
// alert( alert(1) || 2 || alert(3) ); 
// alert( 1 && null && 2 );// null
// alert( alert(7) && alert(2) );// 7 then "undefined"

// let age = prompt("What is your age?");
// if(age <= 90 && age >= 14){
//     alert("You are eligible");
// }else{
//     alert("You are not eligible")
// }

// let age = prompt("What is your age?");
// if(age >= 90 && age <= 14){
//     alert("You are eligible");
// }else{
//     alert("You are not eligible")
// }

// let age = prompt("What is your age?");
// if(!(age <= 90 && age >= 14)){
//     alert("You are eligible");
// }else{
//     alert("You are not eligible")
// }


// // Runs.
// // The result of -1 || 0 = -1, truthy
// if (-1 || 0) alert( 'first' );

// // Doesn't run
// // -1 && 0 = 0, falsy
// if (-1 && 0) alert( 'second' );

// // Executes
// // Operator && has a higher precedence than ||
// // so -1 && 1 executes first, giving us the chain:
// // null || -1 && 1  ->  null || 1  ->  1
// if (null || -1 && 1) alert( 'third' );


// // Login Prompt
// let login = prompt("Login Here");
// if(login == "Admin"){
//     let password = prompt("Enter Password");
//     if(password == "cooper"){
//         alert("Welcome...");
//     }else if(password == "" || password == null){
//         alert("cancelled");
// }
//     else{
//         alert("Incorrect Password");
//     }
// }else if(login == "" || login == null){
//     alert("cancelled");
// }
// else{
//     alert("I don't Know You");
// }


// // The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.
// // Nullish coalescing ??
// let a = null;
// let b;
// let c = 3;
// alert(a ?? b ?? c);

// <-------------------------------------->
// //task
// let first = prompt("First value");
// let second = prompt("Second value");

// function checkPower(num1,num2){
//     return num1**num2;
// }

// alert(checkPower(first,second));
// <-------------------------------------->


// let func = (question, accept, reject) => {
//     if(confirm(question)){
//         accept();
//     }else{
//         reject();
//     }
// }

// func(
//     "Do you agree?",
//     () => alert("You accepted"),
//     () => alert("You rejected")
// )

// <-------------------------------------->