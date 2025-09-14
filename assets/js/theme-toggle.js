document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-btn");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      document
        .getElementById("theme-btn")
        ?.setAttribute("aria-label", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});
