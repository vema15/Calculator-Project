
//Num Button Event Listeners
    let zeroBtn = document.querySelector('.zero-btn-dblwide');
    zeroBtn.addEventListener('click', appendZero);

    let oneBtn = document.querySelector('.one-btn');
    oneBtn.addEventListener('click', appendOne);

    let twoBtn = document.querySelector('.two-btn');
    twoBtn.addEventListener('click', appendTwo);

    let threeBtn = document.querySelector('.three-btn');
    threeBtn.addEventListener('click', appendThree);

    let fourBtn = document.querySelector('.four-btn');
    fourBtn.addEventListener('click', appendFour);

    let fiveBtn = document.querySelector('.five-btn');
    fiveBtn.addEventListener('click', appendFive);

    let sixBtn = document.querySelector('.six-btn');
    sixBtn.addEventListener('click', appendSix);

    let sevenBtn = document.querySelector('.seven-btn');
    sevenBtn.addEventListener('click', appendSeven);

    let eightBtn = document.querySelector('.eight-btn');
    eightBtn.addEventListener('click', appendEight);

    let nineBtn = document.querySelector('.nine-btn');
    nineBtn.addEventListener('click', appendNine);

//Operator Button Event Listeners
    let addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', appendAdd);

    let subtractBtn = document.querySelector('.subtract-btn');
    subtractBtn.addEventListener('click', appendSubtract);

    let multBtn = document.querySelector('.mult-btn');
    multBtn.addEventListener('click', appendMult);

    let divBtn = document.querySelector('.division-btn');
    divBtn.addEventListener('click', appendDiv);

//Functional Button Event Listeners
    let clrBtn = document.querySelector('.clear-btn');
    clrBtn.addEventListener('click', clear);

    let decimalButton = document.querySelector('.decimal-btn');
    decimalButton.addEventListener('click', appendDecimal);

    let percentButton = document.querySelector('.percent-btn');
    percentButton.addEventListener('click', appendPercent);

    let negButton = document.querySelector('.neg-sign-btn');
    negButton.addEventListener('click', appendNegative);





//Append Numbers
    function appendZero() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = 0;
        } else {
            displayBox.innerText += 0;
        }
    }

    function appendOne() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = 1;
        } else {
            displayBox.innerText += 1;
        }
    }

    function appendTwo() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = 2;
        } else {
            displayBox.innerText += 2;
        }
    }

    function appendThree() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = 3;
        } else {
            displayBox.innerText += 3;
        }
    }

    function appendFour() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = 4;
        } else {
            displayBox.innerText += 4;
        }
    }

    function appendFive() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = 5;
        } else {
            displayBox.innerText += 5;
        }
    }

    function appendSix() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = 6;
        } else {
            displayBox.innerText += 6;
        }
    }

    function appendSeven() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = 7;
        } else {
            displayBox.innerText += 7;
        }
    }

    function appendEight() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = 8;
        } else {
            displayBox.innerText += 8;
        }
    }

    function appendNine() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = 9;
        } else {
            displayBox.innerText += 9;
        }
    }

//Append Operators
    function appendAdd() {
        let displayBox = document.querySelector('.row-1-display');
        displayBox.innerText += '+';
    }

    function appendSubtract() {
        let displayBox = document.querySelector('.row-1-display');
        displayBox.innerText += '-';
    }

    function appendMult() {
        let displayBox = document.querySelector('.row-1-display');
        displayBox.innerText += '×';
    }

    function appendDiv() {
        let displayBox = document.querySelector('.row-1-display');
        displayBox.innerText += '÷';
    }


//Append Functional Buttons
    function clear() {
        let displayBox = document.querySelector('.row-1-display');
        displayBox.innerText = 0;

    }

    function appendDecimal() {
        let displayBox = document.querySelector('.row-1-display');
        displayBox.innerText += '.';
    }

    function appendPercent() {
        let displayBox = document.querySelector('.row-1-display');
        displayBox.innerText += '%';
    }

    function appendNegative() {
        let displayBox = document.querySelector('.row-1-display');
        if (displayBox.innerText == '0') {
            displayBox.innerText = '-';
        } else {
            displayBox.innerText += '-';
        }
    }



    //Operation Function

    let equalBtn = document.querySelector('.equal-btn');
    equalBtn.addEventListener('click', runCalc);

    function runCalc() {
        let displayBox = document.querySelector('.row-1-display');
        let displayBoxArray = displayBox.innerText.split('');



        for (let i = 0; i <= displayBoxArray.length - 1; i++) {
            if (displayBoxArray[i] == '×') {
                displayBoxArray[i] = multiply(displayBoxArray, i);
                displayBoxArray.splice((i + 1), 1);
                displayBoxArray.splice((i - 1), 1);
                i = 0;
            } else if (displayBoxArray[i] == '÷' && displayBoxArray[i-2] !== '×' && displayBoxArray[i+2] !== '×') {
                displayBoxArray[i] = divide(displayBoxArray, i);
                displayBoxArray.splice((i + 1), 1);
                displayBoxArray.splice((i - 1), 1);
                i = 0;
            } else if (displayBoxArray[i] == '+' && displayBoxArray[i-2] !== '×' && displayBoxArray[i+2] !== '×' && displayBoxArray[i-2] !== '÷' && displayBoxArray[i+2] !== '÷') {
                displayBoxArray[i] = add(displayBoxArray, i);
                displayBoxArray.splice((i + 1), 1);
                displayBoxArray.splice((i - 1), 1);
                i = 0;
            } else if (displayBoxArray[i] == '-' && displayBoxArray[i-2] !== '×' && displayBoxArray[i+2] !== '×' && displayBoxArray[i-2] !== '÷' && displayBoxArray[i+2] !== '÷' && displayBoxArray[i-2] !== '+' && displayBoxArray[i+2] !== '+') {
                displayBoxArray[i] = subtract(displayBoxArray, i);
                displayBoxArray.splice((i + 1), 1);
                displayBoxArray.splice((i - 1), 1);
                i = 0;

            }

        }

        displayBox.innerText = displayBoxArray;


        //Operations
            function multiply(displayBoxArray, i) {
                return (parseInt(displayBoxArray[i - 1]) * parseInt(displayBoxArray[i + 1]));
            }

            function divide(displayBoxArray, i) {
                return (parseInt(displayBoxArray[i - 1]) / parseInt(displayBoxArray[i + 1]));
            }

            function add(displayBoxArray, i) {
                return (parseInt(displayBoxArray[i - 1])) + (parseInt(displayBoxArray[i + 1]));
            }

            function subtract(displayBoxArray, i) {
                return (parseInt(displayBoxArray[i - 1])) - (parseInt(displayBoxArray[i + 1]));
            }
    }
    
