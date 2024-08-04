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
