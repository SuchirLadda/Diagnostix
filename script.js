// Waits for all content to be loaded before loading JS
document.addEventListener("DOMContentLoaded", function() {

  // Calls on each feature based on id
  const menu = document.getElementById("menu");
  const rect = document.getElementById("rect");
  const blurcontent = document.getElementById("blurcontent");
  const links = document.getElementsByClassName("navLinks");
  const lines = document.getElementsByTagName("hr");
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");

  var quotes = [[
    "Time and health are two precious assets that we don\'t recognize and appreciate until they have been depleted.",
    "Let food be thy medicine and medicine be thy food.",
    "Physical fitness is the first requisite of happiness.",
    "The first wealth is health.",
    "He who has health has hope; and he who has hope, has everything.",
    "Health is a state of complete harmony of the body, mind, and spirit.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Early to bed and early to rise makes a man healthy, wealthy, and wise.",
    "The human body is the best picture of the human soul.",
    "Those who do not find time for exercise will have to find time for illness.",
    "Keep your vitality. A life without health is like a river without water."
  ],
  [
    "Denis Waitley",
    "Hippocrates",
    "Joseph Pilates",
    "Ralph Waldo Emerson",
    "Thomas Carlyle",
    "B.K.S. Iyengar",
    "Will Durant",
    "Benjamin Franklin",
    "Tony Robbins",
    "Edward Smith Stanley",
    "Maxime Lagacé"
  ]];

  let ran = Math.floor(Math.random() * quotes[0].length);

  quote.textContent = '"' + quotes[0][ran] + '"';
  author.textContent = '- ' + quotes[1][ran];

  // Initializes menu rotation to 0
  let menuRotation = 0;

  // Function to open the menu
  function open() {
    blurcontent.style.filter = "blur(4px)";
    menu.style.right = "485px";
    rect.style.width = "450px";
    setTimeout(() => {
      rect.style.height = "620px";
    }, 500);
    menuRotation -= 90;
    menu.style.transform = `rotate(${menuRotation}deg)`;

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const line = lines[i];

      setTimeout(() => {
        line.style.transform = "scale(1)";
        link.style.opacity = "1";
      }, 1000);
    }
  }

  // Function to close the menu
  function close() {

    // Resets everything to default settings
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const line = lines[i];
      link.style.transitionDuration = "0.1s";
      line.style.transform = "scale(0)";

      setTimeout(() => {
        link.style.opacity = "0";
      }, 100);
    }
    menu.style.transitionDuration = "0.75s";
    blurcontent.style.filter = "blur(0px)";
    rect.style.width = "0px";
    menu.style.right = "20px";
    menuRotation += 90;
    menu.style.transform = `rotate(${menuRotation}deg)`;
    setTimeout(() => {
      menu.style.transitionDuration = "0.5s";
    }, 125);
    setTimeout(() => {
      rect.style.height = "40px";
    }, 500);
    
  }

  // Readies the animation
  let ready = true;

  // Listens for the user clicking
  menu.addEventListener("click", () => {

    // Checks if the animation is in progress or not
    if (ready) {

      // Gets the current value for the "right" style
      const rightValue = parseFloat(window.getComputedStyle(menu).right);
      ready = false;

      // Checks if the menu is open or closed and performs accordingly
      if (rightValue == 20) {
        open();
      } else {
        close();
      }
    } else {
      return;
    }

    // Delay the next click
    setTimeout(() => {
      ready = true;
    }, 1000);
  }); // End of click event
}); // End of load event