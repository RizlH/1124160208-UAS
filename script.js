const toggleBtn = document.getElementById("darkModeToggle");
const htmlElement = document.documentElement;

toggleBtn.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
});