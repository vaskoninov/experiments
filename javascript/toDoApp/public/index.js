const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (data.token) {
        // Save the token in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username); // Store the username
        alert("Login successful! Redirecting to tasks...");

        window.location.href = "/tasks"; // Redirect to tasks page
    } else {
        alert(data.error || "Login failed");
    }
    loginForm.reset();
});

// Handle the register form submission
registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();

    if (data.message) {
        alert("Registration successful! Please log in.");
    } else {
        alert(data.error || "Registration failed");
    }
    registerForm.reset();
});
