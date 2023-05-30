/* for side nav */

const bars = document.querySelector(".fa-bars");
var sidebar = document.querySelector(".header-nav") ;
const closingButton = document.querySelector(".fa-times");
const components = document.querySelectorAll(".scroll-link");
 
sidebar.style.transform = ("header-nav");
       
bars.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
}) ;

closingButton.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar");
});


components.forEach(function(component) {
  component.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
  });
});


              
// JavaScript smoothscroll code
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


