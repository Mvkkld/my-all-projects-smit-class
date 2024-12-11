var email = document.getElementById("email");
var password = document.getElementById("password");
var user_email = document.getElementById("user_email");
var login_container = document.getElementById("login_container");
var home_container = document.getElementById("home_container");
var notes = document.getElementById("notes");

function loginUser() {
  if (!email.value || !password.value)
    return alert("Please Enter Email And Password.");
  localStorage.setItem("email", email.value);
  checkIsUserLogin();
}

function checkIsUserLogin() {
  var email = localStorage.getItem("email");
  if (email) {
    login_container.style.display = "none";
    home_container.style.display = "block";
    user_email.innerText = email;
  } else {
    login_container.style.display = "block";
    home_container.style.display = "none";
  }
}
checkIsUserLogin();

function logout() {
  localStorage.removeItem("email");
  checkIsUserLogin();
}

function submitNotes() {}
