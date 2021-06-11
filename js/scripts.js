// console.log('Hello from js/scripts.js!');
//
// const on = () => {
//   document.getElementById("myModal").style.display = "block";
// }
//
//
// const off = () => {
//   document.getElementById("continue").style.display = "none";
// }
//
// // email //
//
// function ValidateEmail(email) {
// var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }
// }



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// closes the window
 /*
function closeForm() {
  document.getElementById("myModal").style.display = "none";
}  */

// thank you

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myModal").style.display = "none";
}
