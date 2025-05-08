const calculator = document.querySelector("#calculator");

const display = document.querySelector("#display");
const buttonbox = document.querySelector("#buttons");
for(let i=0; i <= 4; i++) {
    const div = document.createElement("div");
    buttonbox.appendChild(div);
    div.setAttribute("id",`div${i}`);
}
const div1 = document.querySelector("#div0");
const div2 = document.querySelector("#div1");
const div3 = document.querySelector("#div2");
const div4 = document.querySelector("#div3");
const div5 = document.querySelector("#div4");
 
for(let i=0; i < 4; i++) {
    const button = document.createElement("button");
    div1.appendChild(button);
    const span = document.createElement("span");
    button.appendChild(span);
    span.setAttribute("id", `com${i}`);
};

for(let i=0; i < 4; i++) {
    const button = document.createElement("button");
    div2.appendChild(button);
    const span = document.createElement("span");
    button.appendChild(span);
    span.setAttribute("id", `num9${i}`);
};

for(let i=0; i < 4; i++) {
    const button = document.createElement("button");
    div3.appendChild(button);
    const span = document.createElement("span");
    button.appendChild(span);
    span.setAttribute("id", `num6${i}`);
};

for(let i=0; i < 4; i++) {
    const button = document.createElement("button");
    div4.appendChild(button);
    const span = document.createElement("span");
    button.appendChild(span);
    span.setAttribute("id", `num3${i}`);
};

for(let i=0; i < 4; i++) {
    const button = document.createElement("button");
    div5.appendChild(button);
    const span = document.createElement("span");
    button.appendChild(span);
    span.setAttribute("id", `zero${i}`);
};




function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}

// console.log(add(4,5));
// console.log(subtract(4,5));
// console.log(multiply(4,5));
// console.log(divide(4,5));

const operators = ["+", "-", "x", "÷" ];
let number1 = 0;
let number2 = 0;

function operate(choice) {
    let result = 0;

    if(choice === "add") {
       result = add(number1,number2);
       console.log(`${number1} ${operators[0]} ${number2} : ${result}`);
    } else if(choice === "subtract") {
        result = subtract(number1,number2);
        console.log(`${number1} ${operators[1]} ${number2} : ${result}`);
    } else if(choice === "multiply") {
        result = multiply(number1, number2);
        console.log(`${number1} ${operators[2]} ${number2} : ${result}`);
    } else if(choice === "divide") {
        result = divide(number1,number2);
        console.log(`${number1} ${operators[3]} ${number2} : ${result}`);
    }
};