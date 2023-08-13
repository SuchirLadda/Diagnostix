


// Sign up and Sign in Screen Change
document.addEventListener("DOMContentLoaded", function () {

    let signUp = document.getElementById("signup_btn");
    let signIn = document.getElementById("signin_btn");
    let userName = document.getElementById("name_field");
    let title = document.getElementById("log_title");

    signIn.onclick = function () {
        userName.style.maxHeight = "0";
        title.innerText = "Sign In";
    }

    signUp.onclick = function () {
        userName.style.maxHeight = "65px";
        title.innerText = "Sign Up";
    }

});
