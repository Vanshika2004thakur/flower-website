document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    // Signup Form Submission
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            first: document.getElementById('firstName').value,
            last: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        try {
            const response = await fetch('http://localhost:4800/api/v1/signup/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log(data);
            alert(data.message); // Display success or error message
        } catch (error) {
            console.error('Signup Error:', error);
            alert('Signup failed. Please try again.');
        }
    });

    // Login Form Submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            email: document.getElementById('loginEmail').value,
            password: document.getElementById('loginPassword').value
        };

        try {
            const response = await fetch('http://localhost:4800/api/v1/login/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log(data);
            alert(data.message); // Display success or error message
        } catch (error) {
            console.error('Login Error:', error);
            alert('Login failed. Please try again.');
        }
    });
});