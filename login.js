document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // For this example, just log the details and show an alert
        console.log('Login Details:', { email, password });
        alert('Login successful!');

        // Clear form
        form.reset();
    });
});
