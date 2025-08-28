document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (username === '' || password === '') {
    errorMsg.textContent = 'Both fields are required.';
    return;
  }

  // Example: Dummy credentials
  if (username === 'admin' && password === '123456') {
    errorMsg.style.color = 'green';
    errorMsg.textContent = 'Login successful! Redirecting...';

    // Simulate redirect
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Replace with actual page
    }, 1000);
  } else {
    errorMsg.style.color = 'red';
    errorMsg.textContent = 'Invalid username or password.';
  }
});

function togglePassword() {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type');
  passwordInput.setAttribute('type', type === 'password' ? 'text' : 'password');
}
