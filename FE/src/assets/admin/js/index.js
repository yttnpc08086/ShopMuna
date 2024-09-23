document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.querySelector("aside");
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const darkMode = document.querySelector(".dark-mode");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      sideMenu.style.display = "block";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      sideMenu.style.display = "none";
    });
  }

  if (darkMode) {
    darkMode.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode-variables");
      darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
      darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
    });
  }
});
