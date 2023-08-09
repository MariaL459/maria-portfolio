function updateInchValue(event) {
    //cm value saved 
    const newInchValue = event.target.value

    //converts to inches
    const convertedInchValue = convertCmToInch(newInchValue)

    //setts converted number into inch input field
    inchInputElement.value = convertedInchValue.toFixed(2)

}

function updateCmValue(event) {
    //inch value saved
    const newCmValue = event.target.value

    //converts to cm
    const convertedCmValue = convertInchToCm(newCmValue)

    //setts converted number into cm input field
    cmInputElement.value = convertedCmValue.toFixed(2)
}

function convertCmToInch(value) {
    const inch = value / 2.54
    return inch
}

function convertInchToCm(value) {
    const cm = value * 2.54
    return cm
}

const cmInputElement = document.getElementById("cm-value")
cmInputElement.addEventListener("input",updateInchValue)

const inchInputElement = document.getElementById("inch-value")
inchInputElement.addEventListener("input",updateCmValue)

