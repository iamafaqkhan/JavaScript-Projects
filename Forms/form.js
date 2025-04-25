let studentCount = 0;

document.getElementById("studentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  // Generate unique ID like STU-001
  studentCount++;
  const uniqueId = `STU-${String(studentCount).padStart(3, '0')}`;
  document.getElementById("studentId").value = uniqueId;

  // Get values from form inputs
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  // Display the result
  const result = document.getElementById("studentResult");
  result.innerHTML = `
    <h3>Submitted Information:</h3>
    <p><strong>Student ID:</strong> ${uniqueId}</p>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
  `;

  // Reset the form
  document.getElementById("studentForm").reset();
});
