class UserModel {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }

    login(email, password) {
        // Hash the input password to compare
        const hashedPassword = this.hashPassword(password);
        const user = this.users.find(user => user.email === email && user.password === hashedPassword);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        } else {
            return false;
        }
    }

    register(details) {
        const { name, email, password, gender, dob } = details;
        const hashedPassword = this.hashPassword(password);

        if (this.users.some(user => user.email === email)) {
            throw new Error('User already exists with the same email.');
        }

        const newUser = { name, email, password: hashedPassword, gender, dob };
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    // Simple hash function for demonstration (NOT secure)
    hashPassword(password) {
        return password.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0).toString();
    }

    getUserById(id) {
        return this.users.find(user => user.id === parseInt(id));
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}
