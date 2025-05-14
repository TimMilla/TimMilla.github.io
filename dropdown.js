document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".dropdown-btn");
  
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const content = this.nextElementSibling; // finds the corresponding dropdown content
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
  });
  