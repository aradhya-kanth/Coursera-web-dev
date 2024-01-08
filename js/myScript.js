// alert("Hey Welcome!");
// prompt("Enter your message: ");
// document.write("JavaScript document.write");
// document.getElementById('heading 1').innerHTML = "Replacing by innerHTML";
// console.log("Everything okay");
var name = prompt("Enter your name: ");
document.write(name + "<br>");
var date = Date();
document.write("Current date & time: " + date + "<br>");
var loc = window.location;
document.write(loc + "<br>");
document.write(document.title);
console.log(document.title);

function message(msg) {
    document.getElementById("P1").innerHTML = "<h1>" + msg + "</h1>";
}