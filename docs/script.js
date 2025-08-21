document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side check
    if (username === "admin" && password === "1234") {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = "Login successful!";
        console.log("%c[Login Success] Welcome, admin!", "color: orange; font-weight: bold;");
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = "Invalid credentials.";
        console.log("%c[Login Failed] Invalid username or password.", "color: orange; font-weight: bold;");
    }
});
