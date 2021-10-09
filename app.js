// checks if email field is valid
const emailField = document.getElementById('email');


emailField.addEventListener('keyup', function(event) {
  const isValidEmail = emailField.checkValidity();


if (isValidEmail) {
  console.log("omg");
} else {
  console.log("no");
}
});

// console logs hi when button is clicked
document.getElementById("btn").addEventListener("click", function() {
  console.log("hi");

});
