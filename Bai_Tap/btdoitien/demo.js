function convert() {
    let amount = +document.getElementById("amount").value;
    let from = +document.getElementById("from").value;
    let to = +document.getElementById("to").value;

    let rate = from/to;
    let result = rate * amount;
    document.getElementById("result").innerText = result;
}