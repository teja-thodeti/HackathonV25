document.addEventListener("DOMContentLoaded", function () {
    function validateLogin() {
        let usernameInput = document.getElementById("username").value.trim();
        let passwordInput = document.getElementById("password").value.trim();
        let errorMsg = document.getElementById("error-msg");

        // Hardcoded credentials (for testing)
        const correctUsername = "Teja";
        const correctPassword = "123";

        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            // Successful login - Redirect to afterlogin.html
            window.location.href = "afterlogin.html";
        } else {
            // Show error message
            errorMsg.textContent = "Invalid username or password. Try again!";
            errorMsg.style.color = "red";
        }
    }

    // Attach event listener to the login button
    let loginButton = document.querySelector("button");
    if (loginButton) {
        loginButton.addEventListener("click", validateLogin);
    }
});
