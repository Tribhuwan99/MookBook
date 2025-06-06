
  function validatePasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      return false; // prevent form submission
    }

    // Optional: add more checks (length, strength, etc.)
    if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters.";
      return false;
    }

    errorMessage.textContent = ""; // Clear error if valid
    return true; // allow form submission
  }
