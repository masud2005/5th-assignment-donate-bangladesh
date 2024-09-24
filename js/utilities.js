
//Show History Container and Hide Card Container
function showHistoryContainer(id){
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('card-container').classList.add('hidden');
    return;
}

// Show Card Container and Hide History Container
function showCardContainer(id){
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
    return;
}