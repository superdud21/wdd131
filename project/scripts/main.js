document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navDropdown = document.getElementById("navDropdown");
  const closeBtn = document.getElementById("closeBtn");

  hamburger.addEventListener("click", () => {
    navDropdown.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    navDropdown.classList.remove("open");
  });
});
