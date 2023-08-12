document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById("menu");
  const navigation = document.getElementById("navigation");
  let rotation = 0;

    menu.addEventListener("click", () => {
      const rightValue = parseFloat(window.getComputedStyle(menu).right);

      if (rightValue == 800) {
        menu.style.right = "20px";
        rotation += 90;
        menu.style.transform = `rotate(${rotation}deg)`;
      } else {
        menu.style.right = "800px";
        rotation -= 90;
        menu.style.transform = `rotate(${rotation}deg)`;
      }
    });
});