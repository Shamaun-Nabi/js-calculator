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
    return document.getElementById("screen").innerText = commaSeparate(num);
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
        takeValue=getHistory();
        alert(takeValue);
        takeValue+=+this.id;

        
    })
}
// taking operator
const allOperator = document.getElementsByClassName("operator");
for (let i = 0; i < allOperator.length; i++) {
    allOperator[i].addEventListener("click", function () {
       
    })
}