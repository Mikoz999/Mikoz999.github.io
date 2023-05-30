// Get the form element
const form = document.querySelector('form');

function Redirect() {
     
     
     form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
     event.preventDefault();
     

// Add an event listener for form submission


  // Get the input values
  const fullName = document.getElementById('full_name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone_number').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('password_confirmation').value;
  const usernameValidSpan = document.getElementById('flnamevalid');
    
    if (fullName === '') {
      usernameValidSpan.textContent = 'Please enter your full name.';
      return;
    } 
    if (!/^[a-zA-Z]+( [a-zA-Z]+)+$/.test(fullName)) {
      usernameValidSpan.textContent = 'Please enter a valid full name (e.g., John Doe).';
      return;
    } else {
      usernameValidSpan.textContent = 'Valid full name.';
      usernameValidSpan.style.color = 'green';
    }
    
  if(username.length < 3) {
      document.getElementById("usrnamevalid").innerHTML = "Username must be at least 3 characters";
      return;
  }
  if(username.length > 20) {
      document.getElementById("usrnamevalid").innerHTML = "Username can't exceed 20 characters";
      return;
  }
  if (username.includes(' ')) {
    document.getElementById("usrnamevalid").textContent = 'Username should not contain spaces.';
    return;
  } else {
    document.getElementById("usrnamevalid").textContent = '';
  }
  if (!username || username.trim() === '') {
    
    document.getElementById("usrnamevalid").innerHTML = "&#x2716; please enter your user name";
    return;
  }
  else {
      document.getElementById("usrnamevalid").innerHTML = "";
  }

  
  emailEl = email.indexOf("@");
  emailEl2 = email.lastIndexOf(".");
  if (!email || email.trim() === ' ' || emailEl < 1 || (emailEl2 - emailEl < 2)) {
    
    document.getElementById("usremailvalid").innerHTML = "&#x2716; please enter valid email ID";
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("usremailvalid").innerHTML = "&#x2716; please enter valid email address";
        return;
    }
    
    if (!phoneNumber || phoneNumber.trim() === "" || phoneNumber.length < 10 || phoneNumber.length > 10 || !phoneNumber.startsWith("07")) {
      document.getElementById("usrnumbervalid").innerHTML = "&#x2716; Please enter a valid Kenyan phone number starting with '07'.";
      return;
    }else {
    document.getElementById("usrnumbervalid").innerHTML = "";
      
    }
   
   
   /* password */
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()\-=_+[\]{}|\\;:'",.<>/?]/.test(password);

  const isStrongPassword = password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;

  if (!isStrongPassword) {
      document.getElementById("usrpswdvalid").innerHTML = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
      return;
  }else{
    document.getElementById("usrpswdvalid").innerHTML = 'Strong/valid password';
    document.getElementById("usrpswdvalid").style.color = 'green';
    }
  if (password !== confirmPassword) {
    document.getElementById("usrpswvalid").innerHTML = "&#x2716; The password do not match";
    return;
  }
  
  // If all input values are valid, submit the form
  /* alert('Registration form submitted!'); */
  
    //form.submit();
   setTimeout(function () {
         window.location="./submition.html";
     }, 1000);
  
   
});

}
function resetFormAll() {
    document.getElementById("usrnumbervalid").innerHTML = "";
    document.getElementById("usrnamevalid").innerHTML = "";
    document.getElementById("usremailvalid").innerHTML = "";
    /* document.getElementById("usrpswvalid").innerHTML = ""; */
    document.getElementById("flnamevalid").innerHTML = "";
    document.getElementById("usrpswdvalid").innerHTML = "";
}


