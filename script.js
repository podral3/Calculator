let add = (a,b) => a+b;

let substact = (a,b) => a-b;

let multiply = (a,b) => a*b;

let divide = (a, b) => {
    if(b==0) return "ERROR DIVIDED BY 0";
    return a/b
};

    function operate(first, second, operator){
        if(operator == '+') return add(first, second)
        if(operator == '-') return substact(first, second)
        if(operator == '*') return multiply(first, second)
        if(operator == '/') return divide(first, second)
    }

const displayContent = document.getElementById('display');

const digitsContainer = document.getElementById('digits');

let display = "";
let previousValue

const plusMinus = document.getElementById('plusMinus')

let signValue = 0

const numBtn = digitsContainer.querySelectorAll('button:not(#plusMinus)');

//numbers into display

        numBtn.forEach(btn => btn.addEventListener('click', () => {
        display += btn.textContent;
        displayContent.textContent =  display;
        previousValue = Number(display);

        }))

const operators = document.getElementById('operators')

let secondValue

const operatorsBtn = operators.querySelectorAll('button:not(.exclude)')
let dzialanie
        operatorsBtn.forEach((btn) =>btn.addEventListener('click', () => {
            dzialanie = btn.textContent
            displayContent.textContent = dzialanie
            secondValue = previousValue
            display = ""
        }))


const equalOperation = document.getElementById('equalSign')
let wynik 
        equalOperation.addEventListener('click', () => {
         wynik = operate(secondValue, previousValue, dzialanie)
         displayContent.textContent = wynik 
         previousValue = wynik
         console.log(wynik)
        })

const cancel = document.getElementById('cancel')

        cancel.addEventListener('click', () => {
            wynik = 0
            previousValue = 0
            secondValue = 0
            display = ""
            displayContent.textContent = ""
        })