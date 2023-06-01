const mpesaCodeInput = document.getElementById('M-PESA-CODE');

mpesaCodeInput.addEventListener('input', validateMpesaCode);

function validateMpesaCode() {
  const mpesaCode = mpesaCodeInput.value.trim();

  // Regular expression pattern for M-PESA code validation
  const mpesaCodePattern = /^[A-Za-z0-9]{10}$/;
  /* const mpesaCodePattern = /^[A-Za-z0-9]{10,}$/; */

  if (mpesaCodePattern.test(mpesaCode)) {
    document.getElementById("valid-code7").textContent= "✓ valid M-PESA code";
    document.getElementById("valid-code7").style.color ="green";
  } else {
    document.getElementById("valid-code7").textContent = "";
  }
  if(!mpesaCodePattern.test(mpesaCode)) {
      mpesaCodeInput.setCustomValidity('Invalid M-PESA code');
  }else {
      mpesaCodeInput.setCustomValidity('');
  }
}

