function mainBalance(){
    const foodValue = document.getElementById('food').value 
    const rentValue = document.getElementById('rent').value 
    const clothesValue = document.getElementById('clothes').value 
    let totalExpenses = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue)
    const inputIncome = document.getElementById('income-input').value
    const mainBalance = parseInt(inputIncome) - totalExpenses
    return mainBalance
}

document.getElementById('calculate-button').addEventListener('click', function(){
    //.....total expenses........//
    const foodValue = document.getElementById('food').value 
    const rentValue = document.getElementById('rent').value 
    const clothesValue = document.getElementById('clothes').value 
    let totalExpenses = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue)
    console.log(totalExpenses);
    if( isNaN != ( totalExpenses ) && (totalExpenses > 0)){
        const inputExpenses = document.getElementById('total').innerText
        document.getElementById('total').innerText = totalExpenses
    }
    else{
        alert('please input valid number')
    }
    // ......total income....//
    const inputIncome = document.getElementById('income-input').value
    
    if(isNaN != (inputIncome) && (inputIncome > 0)){
     const totalBalance = mainBalance()
     if(inputIncome > totalExpenses){
        document.getElementById('balance').innerText = totalBalance
     }
     else{
         alert('it is  not  valid')
     }

    }
    else{
        alert('please input valid number')
    }

})
 // save button 
document.getElementById('btn').addEventListener('click', function(){
    const totalBalance = mainBalance()


    const saveInput = document.getElementById('save').value
    const totalSave = (totalBalance * parseInt(saveInput) ) / 100 ;
    const savingAmount = document.getElementById('saving-amount').innerText
    if(totalBalance > totalSave){
        document.getElementById('saving-amount').innerText = totalSave
        
    }
    else{
        alert('its not valid')
        return
    }

    // ...............//
    const newSave = totalBalance - totalSave ;
    console.log(newSave);
    const newSavingAmount = document.getElementById('remaining-balance').innerText
    document.getElementById('remaining-balance').innerText = newSave




})