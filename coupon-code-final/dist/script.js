// Get the coupon pop-up element
const couponPopup = document.getElementById("couponPopup");

// Function to display the pop-up
function showPopup() {
  couponPopup.style.display = "block";
}

// Function to close the pop-up
function closePopup() {
  couponPopup.style.display = "none";
}

// Automatically display the pop-up when the page loads
window.onload = showPopup;

// JavaScript for Automatically Copying the Code and Closing the Popup
document.addEventListener('DOMContentLoaded', function() {
    const couponCode = 'SUNRISE'; // Set your coupon code here
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    
    copyCodeBtn.addEventListener('click', () => {
        // Create a temporary input element
        const tempInput = document.createElement('input');
        tempInput.value = couponCode;
        document.body.appendChild(tempInput);
        
        // Select the code in the input element
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For mobile devices
        
        // Copy the selected code to the clipboard
        document.execCommand('copy');
        
        // Remove the temporary input element
        document.body.removeChild(tempInput);
        
        // Close the popup
        closePopup();
    });
});