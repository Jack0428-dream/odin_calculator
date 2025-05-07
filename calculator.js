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