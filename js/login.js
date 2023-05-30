document.querySelector('#login-form button').addEventListener('click', function(e) {
    e.preventDefault();
    validateLoginForm();
});


function validateLoginForm() {
    const emailEl2 = document.querySelector('#email').value;
    const passwordEl2 = document.querySelector('#password').value;

    if (!emailEl2 || !password) {
        document.getElementById("email&pwdchecker").innerHTML = "please enter both your email and password.";
        document.getElementById("email&pwdchecker").style.color = "red";
        return;
    }else{
        document.getElementById("email&pwdchecker").innerHTML = "";
    }

    // Use regular expression to validate email
    /* 9 */


    // If all validations pass, submit the form
    document.querySelector('#login-form').submit();
}

