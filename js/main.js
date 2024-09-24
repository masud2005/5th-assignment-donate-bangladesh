

const cardContainer = document.getElementById('card-container');
const historyContainer = document.getElementById('history-container');

// Change Donate and History Btn with Function
const buttons = document.querySelectorAll('.btn-item');
for(const btn of buttons){
    btn.addEventListener('click', function(){
        // When the Btn is Clicked, that Button will be Active
        for(const activeBtn of buttons){
            activeBtn.classList.remove('bg-lime-400', 'text-black');
            activeBtn.classList.add('text-gray-500');
        }
        btn.classList.remove('text-gray-500');
        btn.classList.add('bg-lime-400', 'text-black');

        // Card Container and History Container Hidden and Visible
        if(btn.innerText === "History"){
            showHistoryContainer('history-container');
        }else if(btn.innerText === "Donate"){
            showCardContainer('card-container');
        }
    })
}



// Control All Cards with Functions
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

    // Information Added by History Tab
    const donateTitle = document.getElementById(cardId + '-donate-title').innerText;
    historyContainer.innerHTML += `
        <div class="border rounded-xl mx-4 p-5 shadow-inner mb-5">
            <h3 class="text-xl font-semibold mb-2">${donationAmount} Taka is ${donateTitle}</h3>
            <p class="text-gray-500">Date: ${new Date()}</p>
        </div>  
    `;
}