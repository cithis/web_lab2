// Controls the login form interactions
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".slickForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        const userModel = new UserModel();
        const success = userModel.login(email, password);

        if (success) {
            alert("Login successful!");
            window.location.href = 'index.html';  // Redirect on successful login
        } else {
            alert("Login failed! Please check your credentials.");
        }
    });
});
