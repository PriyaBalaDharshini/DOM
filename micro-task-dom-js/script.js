/*  Color a span/div element content when a user moves the mouse over the element. */

/* let div = document.createElement("div");
div.setAttribute("id", "hoverDiv");
div.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, asperiores?";
document.body.append(div); */

let res = document.createElement("div");
res.innerHTML="This is div";
res.addEventListener("mouseover", foo);
document.body.append(res);

function foo(){
    res.style.color="red";
}


function getValue() {
    let userInput = prompt("Enter your input");
    let displayVlaue = document.querySelector("#spanValue");
    displayVlaue.innerHTML = userInput;
}

function getCoordinate(event) {
    let x = event.clientX;
    let y = event.clientY;
    let spanValue = document.querySelector("#spanCoord");
    spanValue.innerHTML = `X value: ${x}, Y value: ${y}`
}

let countCharacter = () => {
    let textArea = document.querySelector("#textArea");
    let charCount = document.querySelector("#charCount");

    let count = textArea.value.length;
    charCount.innerHTML = count;
}

function convert() {
    let inputNum = document.querySelector("#number").value;
    let convertedValue = document.querySelector(".value");
    let binary = parseInt(inputNum).toString(2);
    let octal = parseInt(inputNum).toString(8);
    let hexadecimal = parseInt(inputNum).toString(16);

    convertedValue.innerHTML = `Decimal: ${inputNum}, 
        Binary: ${binary}, 
        Octal: ${octal}, 
        Hexadecimal: ${hexadecimal}`;
}

let elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen)
        elem.requestFullscreen();
}
function closeFullscreen() {
    if (document.exitFullscreen)
        document.exitFullscreen();
}

let button = document.querySelector(".button");
button.addEventListener("keypress", keyPress);

function keyPress(event) {
    if (event.keyCode === 32) {
        alert("Thank You!!!");
        window.close(); // Close the current window
    } else {
        alert("Invalid Key Pressed!!!");
    }
}

/* .editable-content:hover[contenteditable="true"] {
    cursor: text;
} */
