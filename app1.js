const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault(); // stop refreshing web
const input = document.querySelector('input');
const newName = input.value;
//console.log(name); //check input.value
if (input.value.length) {
    for (name of names){
        if (name.toUpperCase() === newName.toUpperCase()) {
            alert("Name arledy taken") //popup
        return; // end when name arledy in []
    }
}
names.push(newName);
//console.log(names);
div.textContent += newName + " ,";
input.value = "";
}}

document.querySelector("button").addEventListener('click', addName);
