const mobileMenu = document.getElementById("mobileMenu");
const menuToggler = document.getElementById("menuToggler");
const navLinks = document.querySelectorAll(".navbar_links a");

menuToggler.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  menuToggler.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    menuToggler.classList.remove("active");
  });
});
