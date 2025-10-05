
const ctaButton = document.getElementById('first-ctaButton');
const outputArea = document.getElementById('first-cta-outputArea');
const projectList = document.getElementById('projectsContainer');

document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('projectsContainer');
    if (window.location.hash === '#projectsContainer') {
        projectList.style.display = 'flex';
    }
});

ctaButton.addEventListener('click', function() {

    let ctaButton = this.clicks; // Using 'this' to refer to the button
    ctaButton = ctaButton || 0; // Initialize if undefined
    ctaButton += 1; // Incrementing the number
    console.log("Button clicked " + ctaButton + " times."); // Concatenating strings
    this.clicks = ctaButton; // Store the updated count back in the button

    /*    // This is how you can update the output area with the number of clicks
    if (ctaButton == 1) {
        outputArea.innerHTML = "<br><p>Button clicked " + 1 + " time</p>";
    } else {
        outputArea.innerHTML = "<br><p>Button clicked " + ctaButton + " times</p>";
    };
    */

    /*document.createElement('div'); // Creating a new element
    let projectListDiv = document.createElement('div'); // Creating a new div element
    projectListDiv.innerHTML = '<br><ul id="listOfProjects"><li><a href="jsProjects/basic-calculator.html">Basic Calculator</a></li><li><a href="jsProjects/to-do-list.html">To-Do List</a></li><li><a href="jsProjects/weather-app.html">Weather App</a></ul>';
    projectsContainer.appendChild(projectListDiv); // Appending the new div to the output area
    projectsContainer.style.display = 'flex';
    console.log("Project list added to the new div.");
    */

    // Just adding html of the list of projects to the existing container
    /*projectsContainer.innerHTML =
        '<br><ul id="listOfProjects">' +
        '<li><a href="jsProjects/basic-calculator.html">Basic Calculator</a></li>' +
        '<li><a href="jsProjects/to-do-list.html">To-Do List</a></li>' +
        '<li><a href="jsProjects/weather-app.html">Marketing App</a></li>' +
        '</ul>'; 

    projectsContainer.style.display = 'flex'; */

    projectsContainer.style.display = 'flex';

    console.log("Project list added to the container.");

    if (ctaButton >= 2) {
        projectListDiv.innerHTML = '';
    }

    window.location.hash = 'projectsContainer';

});

// A simple function you learned how to declare
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Developer")); // Calls the function and logs its return value