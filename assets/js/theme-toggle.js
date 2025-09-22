const primaryColorScheme = "";

const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  if (currentTheme) {
    return currentTheme;
  }

  if (primaryColorScheme) {
    return primaryColorScheme;
  }

  return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setThemeFeature() {
  reflectPreference();

  document.querySelector("#theme-btn")?.addEventListener("click", () => {
    themeValue = themeValue === "light" ? "dark" : "light";
    setPreference();
  });
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  const htmlDocument = document.firstElementChild;
  htmlDocument.dataset.theme = themeValue;

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  const body = document.body;

  if (body) {
    const computedStyles = globalThis.getComputedStyle(body);

    const bgColor = computedStyles.backgroundColor;

    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

reflectPreference();

globalThis.onload = () => {
  setThemeFeature();
};

globalThis
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
