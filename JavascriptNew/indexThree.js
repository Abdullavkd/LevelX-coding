function submitForm(){

let name = document.thisForm.name.value;
let mail = document.thisForm.mail.value;
let password = document.thisForm.password.value;

let isTrue = true;
let spanName = document.getElementById('nameError');
let spanMail = document.getElementById('mailError');
let spanPassword = document.getElementById('passwordError');

if(name == ""){
    spanName.innerHTML = "This Field Is Required";
    isTrue = false;
}else if(name.length<7){
    spanName.innerHTML = "Minimum Seven Letters Required";
    isTrue = false;
}else{
    spanName.innerHTML = "";
}

if(mail == ""){
    spanMail.innerHTML = "Email is Required";
    isTrue = false;
}else if(!mail.includes("@")){
    spanMail.innerHTML = "@ is Required in This Field";
    isTrue = false;
}else{
    spanMail.innerHTML = "";
}

if(password == ""){
    spanPassword.innerHTML = "Password is Rquired";
    isTrue = false;
}else if(password.length<5){
    spanPassword.innerHTML = "Enter Minimum 5 Charectors";
}else{
    spanPassword.innerHTML = "";
}

return isTrue;
}