function plus() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let result = number1 + number2;
    document.getElementById("result").innerText =result;
}
function minus() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let result = number1 - number2;
    document.getElementById("result").innerText =result;
}
function multiply() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let result = number1 * number2;
    document.getElementById("result").innerText =result;
}
function divisionsign() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let result = number1 / number2;
    document.getElementById("result").innerText =result;
}
