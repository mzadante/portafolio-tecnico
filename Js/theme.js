const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-bs-theme");
      
    if (currentTheme === "dark") {
      htmlElement.setAttribute("data-bs-theme", "light");
    } else {
      htmlElement.setAttribute("data-bs-theme", "dark");
    }
});
