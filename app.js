// checks if email field is valid
const emailField = document.getElementById('email');
const signUpForm = document.getElementById('contact-form');
const submitButton = document.getElementById('btn');

emailField.addEventListener('keyup', function(event) {
  const isValidEmail = emailField.checkValidity();


if (isValidEmail) {
  console.log("omg");
  submitButton.disabled = false;
} else {
  console.log("no");
  submitButton.disabled = true;
}
});

// console logs hi when button is clicked
document.getElementById("btn").addEventListener("click", function() {
  console.log("hi");

});
