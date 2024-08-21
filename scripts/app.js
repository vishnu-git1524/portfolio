import "./mobile-menu.js";
import TypeIt from "typeit";


document.addEventListener("DOMContentLoaded", () => {
    new TypeIt(".hero_title", {
      strings: ["Developer", "Programmer", "Coder"], // List of titles
      speed: 100, // Typing speed
      deleteSpeed: 75, // Deleting speed
      breakLines: false,
      loop: true,
      nextStringDelay: 1000, // Delay before typing the next string
      deleteDelay: 1000, // Delay before deleting the string
    })
    .go();
  });


window.addEventListener('scroll', function() {
  const parallaxImage = document.querySelector('.parallax-image');
  const scrollPosition = window.scrollY;
  const parallaxSpeed = 0.3; // Adjust the speed of the parallax effect

  // Calculate the parallax effect
  const offset = scrollPosition * parallaxSpeed;
  parallaxImage.style.transform = `translateY(${offset}px)`;
});

