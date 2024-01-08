function display(element){
    x = document.getElementById('message');
    x.className = "onhover";
    x.innerHTML=element.alt;
}

function original(){
    x = document.getElementById('message');
    x.className = "onleave";
    x.innerHTML='Hover over an image';
}