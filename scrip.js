function checkUserStatus() {
  // Replace this with your actual logic to check the user's status
  var userLoggedIn = true;
  var userRegistered = false;
  
  // Redirect the user based on their status
  if (userLoggedIn) {
    window.location.href = 'login.html';
  } else if (userRegistered) {
    window.location.href = 'registration.html';
  }
}

// Call the checkUserStatus function when the page loads
window.addEventListener('load', checkUserStatus);

