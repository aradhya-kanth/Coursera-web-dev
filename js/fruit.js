var fruits = ['Banana', 'Apple', 'Orange', 'Mango'];
function display() {
    document.getElementById("fruits").innerHTML = fruits;
}
function addItem() {
    var fruit = prompt("Add Fruit: ");
    fruits[fruits.length] = fruit;
    display();
}

