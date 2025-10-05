document.addEventListener('DOMContentLoaded', function() {
const textInput = document.getElementById("numBananas1");
const actionButton = document.getElementById("actionButton");
const errorMessage = document.getElementById("errorMessage");

// Function to calculate reading time
actionButton.addEventListener('click', calculatePrice);

function calculatePrice() {

    let textInputValue = textInput.value;
    let numericValue = parseInt(textInputValue);

    errorMessage.style.display = "none";
    servicePriceContainer.style.display = "none";

    if (isNaN(numericValue) || textInputValue === "" || numericValue < 1 || numericValue > 300) {
        errorMessage.innerHTML = "Please enter a valid number between 1 and 300.";
        errorMessage.style.display = "block";
        textInput.value = "";
        return;
    }

    let pricePerBanana = 0.3;
    let weeksInMonth = 4;
    let totalPrice = numericValue * pricePerBanana * weeksInMonth;
    let formattedPrice = totalPrice.toFixed(2);
    errorMessage.style.display = "none";
    document.querySelector(".servicePrice").innerHTML = "Approximate Price: $" + formattedPrice + " / month";
    document.getElementById("servicePriceContainer").style.display = "block";
    textInput.value = "";
}
});
