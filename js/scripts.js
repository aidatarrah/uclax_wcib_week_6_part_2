console.log('Hello from js/scripts.js!');

const on = () => {
  document.getElementById("overlay").style.display = "block";
}


const off = () => {
  document.getElementById("continue").style.display = "none";
}

// email //

function ValidateEmail(email) {
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
