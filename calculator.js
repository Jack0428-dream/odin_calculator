const calculator = document.querySelector("#calculator");

const display = document.querySelector("#display");
const buttonbox = document.querySelector("#buttons");
const textbox = document.querySelector("#textbox");

const operators = ["+", "-", "×", "÷" ];
let number1 = 0;
let number2 = 0;
let operator = "";

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
    button.setAttribute("id", `cmd${i}`);
};
const cmdC = document.querySelector("#cmd0");
const cmdPN = document.querySelector("#cmd1");
const cmdP = document.querySelector("#cmd2");
const cmdD = document.querySelector("#cmd3");

cmdC.textContent = "A/C";
cmdPN.textContent = "+/-";
cmdP.textContent = "%";
cmdD.textContent = "÷";

cmdC.addEventListener("click", () => {
    textbox.textContent = "";
});

cmdPN.addEventListener("click", () => {
    let conNum = parseFloat(textbox.textContent);
    if(conNum > 0) {
       conNum = -conNum;
       textbox.textContent =`${conNum}`;
    }else if (conNum < 0) {
       conNum = -conNum;
       textbox.textContent =`${conNum}`;
    };
});

cmdP.addEventListener("click", () => {
    let ratio = textbox.textContent;
    ratio = `${ratio}%`;
    textbox.textContent = `${ratio}`;
});

cmdD.addEventListener("click", () => {
    let str = textbox.textContent;
    if (str.includes("%")) {
        let perNum = parseFloat(str.replace("%",""));
        number1 = perNum / 100;
    } else if (!str.includes("%")) {
        number1 = parseFloat(textbox.textContent);
    };
    textbox.textContent = "";
    operator = operators[3];
});

for(let i=0; i < 4; i++) {
    const button = document.createElement("button");
    div2.appendChild(button);
    button.setAttribute("id", `num9${i}`);
};

const num7 = document.querySelector("#num90");
const num8 = document.querySelector("#num91");
const num9 = document.querySelector("#num92");
const cmdM = document.querySelector("#num93");

num7.textContent = "7";
num8.textContent = "8";
num9.textContent = "9";
cmdM.textContent = "×";

num7.addEventListener("click", () => {
    textbox.textContent += "7";
});

num8.addEventListener("click", () => {
    textbox.textContent += "8";
});

num9.addEventListener("click", () => {
    textbox.textContent += "9";
});

cmdM.addEventListener("click", () => {
    let str = textbox.textContent;
    if (str.includes("%")) {
        let perNum = parseFloat(str.replace("%",""));
        number1 = perNum / 100;
    } else if (!str.includes("%")) {
        number1 = parseFloat(textbox.textContent);
    };
    textbox.textContent = "";
    operator = operators[2];
});

for(let i=0; i < 4; i++) {
    const button = document.createElement("button");
    div3.appendChild(button);
    button.setAttribute("id", `num6${i}`);
};

const num4 = document.querySelector("#num60");
const num5 = document.querySelector("#num61");
const num6 = document.querySelector("#num62");
const cmdS = document.querySelector("#num63");

num4.textContent = "4";
num5.textContent = "5";
num6.textContent = "6";
cmdS.textContent = "-";

num4.addEventListener("click", () => {
    textbox.textContent += "4";
});

num5.addEventListener("click", () => {
    textbox.textContent += "5";
});

num6.addEventListener("click", () => {
    textbox.textContent += "6";
});

cmdS.addEventListener("click", () => {
    let str = textbox.textContent;
    if (str.includes("%")) {
        let perNum = parseFloat(str.replace("%",""));
        number1 = perNum / 100;
    } else if (!str.includes("%")) {
        number1 = parseFloat(textbox.textContent);
    };
    textbox.textContent = "";
    operator = operators[1];
});


for(let i=0; i < 4; i++) {
    const button = document.createElement("button");
    div4.appendChild(button);
    button.setAttribute("id", `num3${i}`);
};

const num1 = document.querySelector("#num30");
const num2 = document.querySelector("#num31");
const num3 = document.querySelector("#num32");
const cmdA = document.querySelector("#num33");

num1.textContent = "1";
num2.textContent = "2";
num3.textContent = "3";
cmdA.textContent = "+";

num1.addEventListener("click", () => {
    textbox.textContent += "1";
});

num2.addEventListener("click", () => {
    textbox.textContent += "2";
});

num3.addEventListener("click", () => {
    textbox.textContent += "3";
});

cmdA.addEventListener("click", () => {
    let str = textbox.textContent;
    if (str.includes("%")) {
        let perNum = parseFloat(str.replace("%",""));
        number1 = perNum / 100;
    } else if (!str.includes("%")) {
        number1 = parseFloat(textbox.textContent);
    };
    textbox.textContent = "";
    operator = operators[0];
});

for(let i=0; i < 4; i++) {
    const button = document.createElement("button");
    div5.appendChild(button);
    button.setAttribute("id", `zero${i}`);
};

const dbZero = document.querySelector("#zero0");
const zero = document.querySelector("#zero1");
const deci = document.querySelector("#zero2");
const cmdE = document.querySelector("#zero3");

dbZero.textContent = "00";
zero.textContent = "0";
deci.textContent = ".";
cmdE.textContent = "=";

dbZero.addEventListener("click", () => {
    textbox.textContent += "00";
});

zero.addEventListener("click", () => {
    textbox.textContent += "0";
});

deci.addEventListener("click", () => {
    textbox.textContent += ".";
});

cmdE.addEventListener("click", () => {
    let str = textbox.textContent;
    if (str.includes("%")) {
        let perNum = parseFloat(str.replace("%",""));
        number2 = perNum / 100;
    } else if (!str.includes("%")) {
        number2 = parseFloat(textbox.textContent);
    };
    
    textbox.textContent = operate(number1, operator, number2).toFixed(2);
});

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

function operate(numFir, choice, numSec) {
    let result = 0;

    if(choice === operators[0]) {
       result = add(numFir,numSec);
    } else if(choice === operators[1]) {
        result = subtract(numFir,numSec);
    } else if(choice === operators[2]) {
        result = multiply(numFir,numSec);
    } else if(choice === operators[3]) {
        result = divide(numFir,numSec);
    }

    return result;
};
