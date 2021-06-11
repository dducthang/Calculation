const defaultResult = 0;
let currentResult = defaultResult;
let description
let logEntries = []
let countLog = 0;

function getUserInput()
{
    return parseInt(userInput.value);
}

function writeLog(operation, preResult, finalResult)
{
    let entry = {
        operation: operation,
        preResult: preResult,
        finalResult: finalResult
    };
    logEntries.push(entry);
    console.log(`#${countLog}`);
    for(key in logEntries[countLog])
    {
        console.log(`${key}: ${logEntries[countLog][key]}`)
    }
    countLog++;
}

function writeDescription(operand, num1, num2)
{
    description = `${num1} ${operand} ${num2}`;
    outputResult(currentResult, description);
    writeLog(operand, num1, currentResult);
}

function calculationResult(calculationType)
{
    let enterNumber = getUserInput();
    let initialResult = currentResult;
    if(calculationType === '+'){
        currentResult = currentResult + parseInt(enterNumber);
    }
    else if(calculationType ==='-'){
        currentResult = currentResult - parseInt(enterNumber);
    }
    else if(calculationType ==='*'){
        currentResult = currentResult * parseInt(enterNumber);
    }
    else if(calculationType ==='/'){
        currentResult = currentResult / parseInt(enterNumber);
    }
    writeDescription(calculationType, initialResult, enterNumber);
}


addBtn.addEventListener("click", calculationResult.bind(this,'+'));
subtractBtn.addEventListener("click", calculationResult.bind(this,'-'));
multiplyBtn.addEventListener("click", calculationResult.bind(this,'*'));
divideBtn.addEventListener("click", calculationResult.bind(this,'/'));



