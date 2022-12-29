document.getElementById('calculate-button').addEventListener('click', function(){

    const food = document.getElementById('food')
    const foodText = food.value 
    const foodAmount = parseFloat(foodText)

    const rent = document.getElementById('rent')
    const rentText = rent.value 
    const rentAmount = parseFloat(rentText)

    const clothes = document.getElementById('clothes')
    const clothesText = clothes.value 
    const clothesAmount = parseFloat(clothesText)

    const newAmount = foodAmount + rentAmount + clothesAmount ;

    const incomeInput = document.getElementById('income-input')
    const newIncomeText = incomeInput.value 
    const newIncomeAmount = parseFloat(newIncomeText)
    const updateAmount = newIncomeAmount - newAmount

    const totalAmount = document.getElementById('total')
    const totalAmountText = totalAmount.innerText
    const previousTotal = parseFloat(totalAmountText)
    const newTotal = previousTotal + updateAmount
    totalAmount.innerText = newTotal



    
})