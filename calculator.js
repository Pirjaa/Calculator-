let currentInput = "";
let storedInput = "";
let lastOperator = "";

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        storedInput = currentInput;
        lastOperator = value;
        clearDisplay();
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("result").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function calculateResult() {
    try {
        if (lastOperator) {
            currentInput = eval(storedInput + lastOperator + currentInput).toString();
            lastOperator = "";
            storedInput = "";
        }
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        lastOperator = "";
        storedInput = "";
        updateDisplay();
    }
}

document.getElementById("plusBtn").addEventListener("click", togglePressed);
document.getElementById("minusBtn").addEventListener("click", togglePressed);
document.getElementById("multiplyBtn").addEventListener("click", togglePressed);
document.getElementById("divideBtn").addEventListener("click", togglePressed);
function togglePressed(event) {
    event.target.classList.toggle("pressed");
}

document.addEventListener("click", (event) => {
    const operatorButtons = ["plusBtn", "minusBtn", "multiplyBtn", "divideBtn"];
    if (!operatorButtons.includes(event.target.id)) {
        operatorButtons.forEach((btnId) => {
            document.getElementById(btnId).classList.remove("pressed");
        });
    }
});