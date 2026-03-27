let num1 = "";
let op = "";

// show numbers
function appendNumber(n) {
    document.getElementById("display").value += n;
}

// store operator
function setOperator(o) {
    num1 = document.getElementById("display").value;
    op = o;
    document.getElementById("display").value = "";
}

// calculate result
function calculate() {
    let num2 = document.getElementById("display").value;
    let result;

    if (op === "*") {
        result = num1 * num2;
    } else if (op === "/") {
        if (num2 == 0) {
            result = "Error";
        } else {
            result = num1 / num2;
        }
    }

    document.getElementById("display").value = result;
}

// clear
function clearDisplay() {
    document.getElementById("display").value = "";
}