document.addEventListener("DOMContentLoaded", function() {
    const userModel = new UserModel();
    const currentUser = userModel.getCurrentUser();

    if (currentUser) {
        displayProfile(currentUser);
    } else {
        console.error('No user is currently logged in.');
		window.location.assign("login.html");
    }

    function displayProfile(user) {
        const profileDetails = document.getElementById('ProfileDetails');
        if (profileDetails) {
            profileDetails.innerHTML = `
                <div class="profile-info">
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>DOB: ${user.dob}</p>
                </div>
            `;
        } else {
            console.error('ProfileDetails element not found!');
        }
    }
});
