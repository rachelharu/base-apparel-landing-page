// checks if email field is valid
const emailField = document.getElementById('email');
const signUpForm = document.getElementById('contact-form');
const submitButton = document.getElementById('btn');
const errorImage = document.getElementById('error-image')
//checks validity of email field
emailField.addEventListener('keyup', function(event) {
  const isValidEmail = emailField.checkValidity();

//function to show error message and change the css of id error
  function showError(message){
  let errorElement = document.getElementById("error");
  errorElement.innerHTML = message;
  errorElement.style.display = 'block';
  }

//if else statement to submit the form if it passes all checks and enables button if valid
if (isValidEmail) {
  console.log("omg");
  submitButton.disabled = false;
} else {
  console.log("no");
  submitButton.disabled = true;
  showError('Please provide a valid email.');
  errorImage.style.visibility = 'visible';
}
});



// console logs hi when button is clicked
submitButton.addEventListener("click", function() {
  console.log("hi");
  // signUpForm.submit();
});
