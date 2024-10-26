document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Simulate a successful login for now
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'test@example.com' && password === 'password') {
        // Redirect to index.html
        window.location.href = '../index.html';
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});