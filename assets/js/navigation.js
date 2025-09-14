function toggleNav() {
  // Toggle menu
  const menuBtn = document.querySelector(".hamburger-menu");
  const menuIcon = document.querySelector(".menu-icon");
  const menuItems = document.querySelector("#menu-items");

  menuBtn?.addEventListener("click", () => {
    const menuExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuIcon?.classList.toggle("is-active");
    menuBtn.setAttribute(
      "aria-expanded",
      menuExpanded ? "false" : "true"
    );
    menuBtn.setAttribute(
      "aria-label",
      menuExpanded ? "Open Menu" : "Close Menu"
    );
    menuItems?.classList.toggle("display-none");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  toggleNav();
});