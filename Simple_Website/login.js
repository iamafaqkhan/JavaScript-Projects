document.getElementById("LoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Find matching user
    const validUser = users.find(user => user.email === email && user.password === password);
  
    if (validUser) {
      alert("Login successful!");
      window.location.href = "./homepage.html"; // Replace with your actual destination
    } else {
      alert("Invalid email or password!");
    }
  });
  