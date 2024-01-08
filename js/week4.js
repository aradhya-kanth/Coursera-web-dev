function takeInput(){
    alert("The function is calling");
    var nameContent = document.getElementById("email_addr");
    document.getElementById("print").innerHTML = nameContent.value;
    document.getElementById("conf_addr").value = nameContent.value;
}