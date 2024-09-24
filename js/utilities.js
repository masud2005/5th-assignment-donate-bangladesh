

//Function >>> Input Field Value Catch and Convert Number
// function getInputFieldValueById(id){
//     const inputFieldValue = document.getElementById(id).value;
//     const inputFieldNumber = parseFloat(inputFieldValue);
//     return inputFieldNumber;
// }

function getInputFieldValue(id){
    const inputFieldValue = document.querySelector(id).value;
    const inputFieldNumber = parseFloat(inputFieldValue)
    return inputFieldNumber;
}

function getTotalAmount(id){
    const amountValue = document.querySelector(id).innerText;
    const amountNumber = parseFloat(amountValue);
    return amountNumber;
}

// Function >>> Total Amount Value Catch and Convert Number
// function getTotalAmountById(id){
//     const amountValue = document.getElementById(id).innerText;
//     const amountNumber = parseFloat(amountValue);
//     return amountNumber;
// }
