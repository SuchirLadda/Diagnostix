// Waits for all content to be loaded before loading JS
document.addEventListener("DOMContentLoaded", function() {

  // Calls on each feature based on id
  const menu = document.getElementById("menu");
  const rect = document.getElementById("rect");
  const blurcontent = document.getElementById("blurcontent");
  const links = document.getElementsByTagName("a");

  // Initializes menu rotation to 0
  let menuRotation = 0;

  // Function to open the menu
  function open() {
    blurcontent.style.filter = "blur(4px)";
    menu.style.right = "475px";
    rect.style.width = "450px";
    setTimeout(() => {
      rect.style.height = "720px";
    }, 500);
    menuRotation -= 90;
    menu.style.transform = `rotate(${menuRotation}deg)`;

    for (let i = 0; i < links.length; i++) {
      const link = links[i];

      setTimeout(() => {
        link.style.opacity = "1";
      }, 1000);
    }
  }

  // Function to close the menu
  function close() {

    // Resets everything to default settings
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      link.style.transitionDuration = "0.1s";
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

  // Listens for the user clicking
    menu.addEventListener("click", () => {

      // Gets the current value for the "right" style
      const rightValue = parseFloat(window.getComputedStyle(menu).right);

      // Checks if the menu is open or closed and performs accordingly
      if (rightValue == 20) {
        open();
      } else {
        close();
      }
    });
});