let currentCouponCode = null;

let couponState = "active";

let couponButton = document.getElementById('couponButton');
let goToOrderButton = document.getElementById('go-to-order-button');
let couponBanner = document.getElementById('coupon-modal-overlay');
let couponDisplay = document.getElementById('coupon-code-display');
let couponCode = document.getElementById('couponCode');
let copyButton = document.getElementById('copyButton');
let overlay = document.querySelector('.modal-overlay');
let copyMessage = document.getElementById('copyMessage');

function showCoupon() {
    if (couponState === "active") {
        couponBanner.style.visibility = 'visible';
        couponBanner.style.opacity = '1';
    };
    
    if (currentCouponCode === null) {
        let codes = ['astaLavistaBaby', 'bananaHammock', 'bananaSplit', 'bananaPants', 'bananaPhone', 'bananaBoat', 'bananaBread', 'bananaPeel', 'bananaRepublic', 'bananaFoster'];
        currentCouponCode = codes[Math.floor(Math.random() * codes.length)];
    }

    couponCode.innerHTML = currentCouponCode;
    couponDisplay.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {

    const deadlineKey = 'couponDeadline';
    const msIn42Hours = 42 * 60 * 60 * 1000;

    let deadlineMs;
        const savedDeadline = localStorage.getItem(deadlineKey);

        // Check if a saved deadline exists AND if that saved deadline is still in the future.
        if (savedDeadline && parseInt(savedDeadline) > new Date().getTime()) {
            
            // Scenario 1: Deadline exists and is still valid. Use the saved time.
            deadlineMs = parseInt(savedDeadline);
            
        } else {
            
            // Scenario 2: No deadline saved, or the saved one has expired.
            // Set a brand new 48-hour deadline and save it for future reloads.
            deadlineMs = new Date().getTime() + msIn42Hours;
            localStorage.setItem(deadlineKey, deadlineMs);
        }

    const couponTimer = document.getElementById("coupon-timer");

    couponTimer.innerHTML = "";

    // Set the date we're counting down to
    const countDownDate = new Date().getTime() + (42 * 60 * 60 * 1000); // 42 hours from now

    couponButton.addEventListener("click", showCoupon);

    // Update the count down every 1 second
    let x = setInterval(function() { //The browser runs JavaScript only when you tell it to. If you want something to happen repeatedly (like updating a timer display every second), you use setInterval.

        // Get today's date and time
        let now = new Date().getTime();

        let distance = deadlineMs - now;

        // Find the distance between now and the count down date
        const msInHour = 1000 * 60 * 60;
        const msInMinute = 1000 * 60;
        const msInSecond = 1000;

        // Time calculations for days, hours, minutes and seconds
        let hours = Math.floor(distance / msInHour);
        let minutes = Math.floor((distance % msInHour) / msInMinute);
        let seconds = Math.floor((distance % msInMinute) / msInSecond);

        couponTimer.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
            clearInterval(x); // Stops interval
            couponTimer.innerHTML = "EXPIRED";
            couponState = "expired";
            // Clear the deadline so a new one starts on the next page load.
            localStorage.removeItem(deadlineKey); 
            couponButton.removeEventListener("click");
            couponButton.style.backgroundColor = "grey";
            couponButton.style.cursor = "not-allowed";
            couponButton.style.pointerEvents = "none";
            couponButton.style.opacity = "0.6";
            couponButton.title = "The offer's expired.";
        }
    }, 1000); //1000 milliseconds = 1 second
});

goToOrderButton.addEventListener("click", function() {
    couponBanner.style.visibility = 'hidden';
    couponBanner.style.opacity = '0';
    // Access the first element in the HTMLCollection with [0]
    document.getElementsByClassName('bananaMainContainer')[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
});

copyButton.addEventListener("click", copyCouponCode);

function copyCouponCode() {
    const codeToCopy = couponCode.innerHTML

    if (!codeToCopy || codeToCopy === "") {
        console.error("No coupon code to copy.");
        return;
    }

    navigator.clipboard.writeText(codeToCopy).then(function() {
        copyMessage.style.display = 'block';
        setTimeout(() => {
            copyMessage.style.display = 'none';
        }, 2000);
    
    const finalCouponInput = document.getElementById('coupon');
    if (finalCouponInput) {
        finalCouponInput.value = codeToCopy;
    }

    console.log('Coupon code copied to clipboard: ', codeToCopy);


    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });


};


function closeCouponModal() {
    couponBanner.style.visibility = 'hidden';
    couponBanner.style.opacity = '0';
}