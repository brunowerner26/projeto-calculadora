let num1 = '', num2 = '', operator = '', result = 0
const visorHtml = document.querySelector('.visorText')

function getOperator(operatorParam) {
    operator = operatorParam
}


function reset() {
    num1 = ''
    num2 = ''
    operator = ''
    visorHtml.innerHTML=''
}


function getNumber(number) {
    if (operator === '') {
        num1 = num1 + number;
    } else {
        num2 = num2 + number;
    }
    console.log(num1, operator, num2)
    visorHtml.innerHTML=num1+operator+num2;
}


function calculate() {
    if (operator === '+') {
       result = Number(num1) + Number(num2)
    } else if (operator ==='-') {
        result = Number(num1) - Number(num2)
    } else if (operator === '*') {
        result = Number(num1) * Number(num2)
    } else {
        result = Number(num1) / Number(num2)
    }
    visorHtml.innerHTML=result;
}

