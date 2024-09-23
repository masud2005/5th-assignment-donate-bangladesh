
// All Card Handle
function updateBalance(cardId){
    // All fields are captured
    const totalMainBalance = document.getElementById('main-balance');
    const totalDonationBalance = document.getElementById(cardId + '-total-amount');
    const donationAmountField = document.getElementById(cardId + '-donation-amount');

    // convert Number from input field Balances
    const donationAmount = parseFloat(donationAmountField.value);

    // convert Number from Main Balances
    const mainBalance = parseFloat(totalMainBalance.innerText);

    //  Validation Check
    if(isNaN(donationAmount)  || donationAmount <= 0 || donationAmount > mainBalance){
        alert("Invalid donation amount! Please check and try again.");
        return;
    }

    // convert Number from donation Balances
    const donationBalance = parseFloat(totalDonationBalance.innerText);
    
    // Updating the donation amount
    const newDonationBalance = donationBalance + donationAmount;
    totalDonationBalance.innerText = newDonationBalance;

    // Updating the Main Balance amount
    const newMainBalance = mainBalance - donationAmount;
    totalMainBalance.innerText = newMainBalance;

    // Empty input field
    donationAmountField.value = '';

    // Successful Massage
    my_modal.showModal();
}