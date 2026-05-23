// Get DOM elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');
const loginForm = document.getElementById('loginForm');

// Check for saved credentials on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    
    if (savedUsername && savedPassword) {
        existingBtn.style.display = 'block';
    }
});

// Handle form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    
    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }
    
    // Show login alert
    alert(`Logged in as ${username}`);
    
    // Handle remember me functionality
    if (checkbox.checked) {
        // Store credentials in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        // Show the existing user button
        existingBtn.style.display = 'block';
    } else {
        // Remove credentials from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        
        // Hide the existing user button
        existingBtn.style.display = 'none';
    }
    
    // Optionally clear the form fields after submission
    usernameInput.value = '';
    passwordInput.value = '';
    checkbox.checked = false;
});

// Handle existing user login
existingBtn.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    } else {
        alert('No saved credentials found');
        existingBtn.style.display = 'none';
    }
});