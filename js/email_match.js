// var email1;
// function store(element){
//   email1 = element.value;
// }
// document.getElementById("print").innerHTML = email1;
function verify(){
    var email1 = document.getElementById("email_addr").value;
    var email2 = document.getElementById("con_addr").value;
    if(email1 != email2){
        alert("Email doesn't match");
        return false;
    }
}