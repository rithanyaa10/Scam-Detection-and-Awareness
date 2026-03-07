function validateForm(){

var name = document.getElementById("name").value;
var password = document.getElementById("password").value;
var gender = document.getElementsByName("gender");
// Name validation
if(name == ""){
alert("Name cannot be empty");
return false;
}
// Password validation
if(password == ""){
alert("Password cannot be empty");
return false;
}
if(password.length < 6){
alert("Password must be at least 6 characters");
return false;
}
// Radio button validation
var genderSelected = false;
for(var i=0; i<gender.length; i++){
if(gender[i].checked){
genderSelected = true;
}
}
if(genderSelected == false){
alert("Please select your gender");
return false;
}
alert("Form Submitted Successfully!");
return true;
}