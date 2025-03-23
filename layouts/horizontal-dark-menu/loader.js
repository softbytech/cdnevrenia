window.addEventListener("load", function () {
    var loadScreen = document.getElementById("load_screen");
    if (loadScreen) document.body.removeChild(loadScreen);

    var themeKey = "theme";
    var defaultTheme = { settings: { layout: { darkMode: false, boxed: false } } };
    var storedTheme = localStorage.getItem(themeKey);
    var themeConfig = storedTheme ? JSON.parse(storedTheme) : defaultTheme;
    document.body.classList.add("dark");
});
