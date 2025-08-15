document.addEventListener("DOMContentLoaded", function () {
    let loginButton = document.getElementById("login-btn");

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            let usernameInput = document.getElementById("username").value.trim();
            let passwordInput = document.getElementById("password").value.trim();
            let errorMsg = document.getElementById("error-msg");

            // Hardcoded credentials
            const correctUsername = "Teja";
            const correctPassword = "123";

            if (usernameInput === correctUsername && passwordInput === correctPassword) {
                window.location.href = "afterlogin.html"; // Redirect on successful login
            } else {
                errorMsg.innerText = "Invalid username or password. Try again!";
                errorMsg.style.color = "red";
            }
        });
    }
});
