function add(){
    let a = Number(document.getElementById("firstNumber").value);
    let b = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").value = a + b;
    
};

function subtract(){
    let a = Number(document.getElementById("firstNumber").value);
    let b = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").value = a - b;
};

function multiply(){
    let a = Number(document.getElementById("firstNumber").value);
    let b = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").value = a * b;
};

function divide(){
    let a = Number(document.getElementById("firstNumber").value);
    let b = Number(document.getElementById("secondNumber").value);
    if (b === 0) {
        alert("Cannot divide by zero!");
        return;
    }
    document.getElementById("result").value = a / b;
}

document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("subtractBtn").addEventListener("click", subtract);
document.getElementById("multiplyBtn").addEventListener("click", multiply);
document.getElementById("divideBtn").addEventListener("click", divide);
 