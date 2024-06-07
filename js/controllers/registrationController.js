document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.querySelector(".slickForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const userDetails = {
            name: document.querySelector('input[name="name"]').value,
            email: document.querySelector('input[name="email"]').value,
            password: document.querySelector('input[name="password"]').value,
            gender: document.querySelector('select[name="gender"]').value,
            dob: document.querySelector('input[name="dob"]').value,
        };

        const userModel = new UserModel();

        try {
            userModel.register(userDetails);
            alert("Registration successful! You can now login.");
            // Optionally redirect to the login page or update the UI
            window.location.href = 'login.html'; // Redirect to login page
        } catch (error) {
            alert(error.message); // Show error message from the registration process
        }
    });
});
