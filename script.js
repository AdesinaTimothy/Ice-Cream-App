//Ice Cream World Problem 
const checkList = document.querySelector(".checkbox-list")
const checkItems = document.querySelectorAll(".checkbox-list input")
const inputName = document.querySelector(".name input")
const orderNow = document.querySelector("#cal")
const orderSummary = document.querySelector('.order-summary-div')
const customerNameDiv = document.querySelector('.customer-name-div')
const flavoursOrderedDiv = document.querySelector('.flavours-ordered-div')
const totalPriceDiv = document.querySelector('.total-Price-div')



function iceCreamOrder () {
    let customername = inputName.value
    let totalValue = 0;
    checkItems.forEach((flavour) => {
        if (flavour.checked) {
            totalValue += parseInt(flavour.value)
        }
    })

    totalPriceDiv.textContent =`Total Price: ${formatter.format(totalValue)} naira`;

    // Order Summary
    orderSummary.style.display = 'block';
    customerNameDiv.textContent = `Customer Name: ${customername}`;

    let listOfFlavoursChecked = [];

    // Flavours ordered
    checkItems.forEach((flavourChecked) => {
        if(flavourChecked.checked) {
            listOfFlavoursChecked.push(flavourChecked.name)
        }
    }) 

    // console.log(listOfFlavoursChecked);
    flavoursOrderedDiv.textContent = `Flavours Ordered: ${listOfFlavoursChecked.join(", ")}`;  
}

const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
});

orderNow.addEventListener('click', iceCreamOrder);

