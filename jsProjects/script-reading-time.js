const resultContainer = document.getElementById("readTimeResult");
const textInput = document.getElementById("textInput");
const wordsCountOutput = document.getElementById("wordsCount");
const readMinutesOutput = document.getElementById("readMinutes");
const readSecondsOutput = document.getElementById("readSeconds");
const actionButton = document.getElementById("actionButton");

// Function to calculate reading time

function calculateReadingTime () {
    // Get the text from the textarea
    let textForCount = textInput.value;
    // Split the text into words
    let wordsArray = textForCount.trim().split(/\s+/); // This is a crucial first step. It cleans up any leading or trailing spaces, which would otherwise give you a false word count. This shows you're thinking about real-world scenarios, not just ideal ones.//

    //count the number of words in the text input//
    let wordsCount = wordsArray.length;
    wordsCountOutput.innerHTML = wordsCount

    //Input the number of words into the output area//


    //Calculate the mid length of the words in the text input//


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

    //If the text is empty set the alert and return//
    if (textForCount.trim() === "") {
        resultContainer.innerHTML = "<p>Please enter some text to calculate reading time.</p>";
        resultContainer.style.display = "block";
        resultContainer.style.color = "#f55f5cff";
        resultContainer.style.marginTop = "-16px";
        return;
    }

    // Display the results in the output area//
    resultContainer.style.display = "block";

}

actionButton.addEventListener('click', calculateReadingTime);

