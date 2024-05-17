// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    let newCatsArray = cats.slice(); // Create a shallow copy of the cats array
    newCatsArray.push(name); // Append the new cat to the copy
    return newCatsArray; // Return the modified copy
}
function prependCat(name) {
    let newCatsArray = cats.slice(); // Create a shallow copy of the cats array
    newCatsArray.unshift(name); // Prepend the new cat to the copy
    return newCatsArray; // Return the modified copy
}
function removeLastCat() {
    let newCatsArray = cats.slice(); // Create a shallow copy of the cats array
    newCatsArray.pop(); // Remove the last cat from the copy
    return newCatsArray; // Return the modified copy
}
function removeFirstCat() {
    let newCatsArray = cats.slice(); // Create a shallow copy of the cats array
    newCatsArray.shift(); // Remove the first cat from the copy
    return newCatsArray; // Return the modified copy
}
