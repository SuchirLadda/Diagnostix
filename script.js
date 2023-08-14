
// Sign up and Sign in Screen Change
document.addEventListener("DOMContentLoaded", function () {

    let signUp = document.getElementById("signup_btn");
    let signIn = document.getElementById("signin_btn");

    document.getElementById("signin_btn").onclick = function () {
        location.href = "signin.html";
    };

    document.getElementById("signup_btn").onclick = function () {
        location.href = "signup.html";
    };

});

