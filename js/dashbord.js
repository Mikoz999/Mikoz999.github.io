/* nav bar */
const bar = document.querySelector(".fa-bars");
var menu = document.querySelector(".menu");

bar.addEventListener("click", ()=>{
    menu.classList.toggle("show-menu");
});

/* smooth scrol */
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


