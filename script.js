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
    } else {
        existingBtn.style.display = 'none';
    }
});

// Handle form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    
    // Show login alert
    alert(`Logged in as ${username}`);
    
    // Handle remember me functionality
    if (checkbox.checked) {
        // Store credentials in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // Remove credentials from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    
    // Update existing button visibility
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingBtn.style.display = 'block';
    } else {
        existingBtn.style.display = 'none';
    }
});

// Handle existing user login
existingBtn.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});

// Helper function for testing (if needed)
function loginUser(username, password) {
    usernameInput.value = username;
    passwordInput.value = password;
    checkbox.checked = true;
    
    // Trigger form submission
    const submitEvent = new Event('submit', { bubbles: true });
    loginForm.dispatchEvent(submitEvent);
}