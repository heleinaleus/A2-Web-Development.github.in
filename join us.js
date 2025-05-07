
const form = document.getElementById('registration-form'); // Registration form
const formContainer = document.getElementById('form-container'); // The container holding the form
const thankYou = document.getElementById('thank-you'); // The thank you message container 

// For form submission 
form.addEventListener('submit', function(event) {
  event.preventDefault();  
  formContainer.style.display = 'none'; // This is to hide the form container
  thankYou.style.display = 'block'; // Shows the thank you message 
});