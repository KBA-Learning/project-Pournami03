// Handle form submission and check credentials
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Simulated admin login credentials
    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin123';

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the entered credentials match admin's credentials
    if (email === adminEmail && password === adminPassword) {
        // Redirect to admin.html
        window.location.href = 'admin.html';
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});