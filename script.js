function getHistory() {

    return document.getElementById("history").innerText;
}

function printHistory(num) {
    return document.getElementById("history").innerText = num;
}

function getScreenValue() {
    return document.getElementById("screen").innerText;
}

function screenOutput(num) {
    if (num == " ") {
        document.getElementById("screen").innerText = num;
    } else {
        document.getElementById("screen").innerText = commaSeparate(num);
    }

}

// Making Comma separated value
function commaSeparate(num) {
    // let makeNumber = parseFloat(num);
    let number = Number(num);
    let value = number.toLocaleString("en");
    return value;
}

let takeValue;
// Taking button Number;
const allNumber = document.getElementsByClassName("number");
for (let i = 0; i < allNumber.length; i++) {
    allNumber[i].addEventListener("click", function () {
        takeValue = getHistory();
        takeValue = takeValue + this.id;
        printHistory(takeValue);

    })
}

// taking operator
const allOperator = document.getElementsByClassName("operator");
for (let i = 0; i < allOperator.length; i++) {
    allOperator[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printHistory(" ");
            screenOutput(" ");
        } else if (this.id == "backspace") {
            takeValue = getHistory()
            takeValue = takeValue.substr(0, takeValue.length - 1);
            printHistory(takeValue);
            screenOutput(" ");
        } else if (this.id == "equal") {
            takeValue = getHistory();
            let result = eval(takeValue);
            screenOutput(result);
            printHistory(takeValue);
        } else {
            takeValue = getHistory();
            takeValue += this.id;
            printHistory(takeValue);

        }

    })
}