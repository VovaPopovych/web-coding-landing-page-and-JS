const resultContainer = document.getElementById("readTimeResult");
const textInput = document.getElementById("textInput");
const wordsCountOutput = document.getElementById("wordsCount");
const readMinutesOutput = document.getElementById("readMinutes");
const readSecondsOutput = document.getElementById("readSeconds");
const actionButton = document.getElementById("actionButton");
const errorMessage = document.getElementById("errorMessage");

// Hide the result container initially
resultContainer.style.display = "none";

// Function to calculate reading time
textInput.addEventListener('input', calculateReadingTime);

function calculateReadingTime () {
    // Get the text from the textarea
    let textForCount = textInput.value;
    // Split the text into words
    let wordsArray = textForCount.trim().split(/\s+/); // This is a crucial first step. It cleans up any leading or trailing spaces, which would otherwise give you a false word count. This shows you're thinking about real-world scenarios, not just ideal ones.//

    //count the number of words in the text input//
    let wordsCount = textForCount.trim() === '' ? 0 : wordsArray.length;
    wordsCountOutput.innerHTML = wordsCount;

    //If the text is empty set the alert and return//
    if (textForCount.trim() === "") {
        errorMessage.innerHTML = "<p>Please enter some text to calculate reading time.</p>";
        errorMessage.style.display = "block";
        errorMessage.style.color = "#f55f5cff";
        errorMessage.style.marginTop = "-16px";
        resultContainer.style.display = "none"; // Hide the result container if there's an error
        readMinutesOutput.innerHTML = "";
        readSecondsOutput.innerHTML = "";
        wordsCountOutput.innerHTML = "0";
        return;
    } else {
        errorMessage.style.display = "none"; // Clear any previous error message
    }

    //Do the math for Reading Time. WPM AVG is 238 words// 
    let readSeconds = wordsCount*60/238
    
    if (readSeconds >= 60) {
        readminutes = Math.floor(readSeconds / 60);
        readSeconds = readSeconds % 60; // Get the remaining seconds after calculating minutes
        readMinutesOutput.innerHTML = readminutes + " min";
        readSecondsOutput.innerHTML = Math.round(readSeconds) + " sec";
    } else if (readSeconds === 0) {
        readSecondsOutput.innerHTML = "";
    } else if (readSeconds < 60) {
        readMinutesOutput.innerHTML = "";
        readSecondsOutput.innerHTML = Math.round(readSeconds) + " sec";
    }

    // Display the results in the output area//
    resultContainer.style.display = "block";
}



