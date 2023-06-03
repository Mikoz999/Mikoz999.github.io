const icon = document.querySelector('.success-icon');

    function animateIcon() {
      icon.innerHTML = '&#10003;'; // Unicode for checkmark symbol
      icon.style.transform = 'scale(1.2)';
    }

    // Call the animation function after 1 second
    setTimeout(animateIcon, 2500);

