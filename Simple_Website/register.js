document.getElementById("SignUp").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Get existing users or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if user already exists
    const exists = users.some(user => user.username === username || user.email === email);
  
    if (exists) {
      alert("Username or Email already exists!");
      return;
    }
  
    // Add new user and save to localStorage
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Registration successful!");
    window.location.href = "./index.html.html";
  });
  