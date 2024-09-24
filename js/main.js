
const totalMainBalance = document.querySelector('.main-balance');
// const totalDonateAmount = document.getElementById('total-donate-amount');
const totalDonateAmount = document.querySelector('.total-donate-amount');
console.log({totalMainBalance, totalDonateAmount})

// document.getElementById('donate-btn1').addEventListener('click', function(){
//    // Function Calling
//    const inputValue = getInputFieldValueById('donate-amount');
//    const amountNumber = getTotalAmountById('total-donate-amount');
//    const mainBalance = getTotalAmountById('main-balance');

//     // Validation Check
//     if(isNaN(inputValue)  || inputValue < 0 || inputValue > amountNumber){
//         alert("You amount isn't valid!");
//         return;
//     }

//    // Increase Donate Amount
//    const currentAmount = amountNumber + inputValue;
//    // Decrese Main Balance Amount
//    const currentMainBalance = mainBalance - inputValue;
//    // New Balance Upadated
//    totalDonateAmount.innerText = currentAmount;
//    totalMainBalance.innerText = currentMainBalance;
//     document.getElementById('donate-amount').value = '';
// })
 


const buttons = document.querySelectorAll('.donate-btn');

// console.log(buttons)
for(i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        console.log('click');
//         const test = document.querySelector('.total-donate-amount').innerText;
// console.log(test)
            // Function Calling
        // const inputValue = getInputFieldValueById('donate-amount');
        // const amountNumber = getTotalAmountById('total-donate-amount');
        // const mainBalance = getTotalAmountById('main-balance');
        // const test = document.querySelector('.donate-amount').value;
        // console.log(test);
        const inputValue = getInputFieldValue('.donate-amount');
        const amountNumber = getTotalAmount('.total-donate-amount');
        const mainBalance = getTotalAmount('.main-balance');
        console.log({inputValue ,amountNumber, mainBalance});

        // Validation Check
        if(isNaN(inputValue)  || inputValue < 0 || inputValue > mainBalance){
            alert("You amount isn't valid!");
            return;
        }

        // Increase Donate Amount
        const currentAmount = amountNumber + inputValue;
        // Decrese Main Balance Amount
        const currentMainBalance = mainBalance - inputValue;
        // New Balance Upadated
        totalDonateAmount.innerText = currentAmount;
        totalMainBalance.innerText = currentMainBalance;
        document.querySelector('.donate-amount').value = '';
    })
}