const rootElement = document.documentElement;
const toggleSwitch = document.getElementById('theme');
const themeIcon = document.querySelector('#theme i');
const currentTheme = localStorage.getItem("theme");
const demoBtn = document.querySelector('.live-demo');

if (currentTheme) {
    rootElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        themeIcon.classList.add("bi-brightness-high")
        themeIcon.classList.remove("bi-moon-stars")
    }
}

function switchTheme(e) {
    if (rootElement.getAttribute("data-theme") === "light") {
        rootElement.setAttribute("data-theme", "dark");
        themeIcon.classList.add("bi-brightness-high")
        themeIcon.classList.remove("bi-moon-stars")
        demoBtn.classList.add('bg-gradient')
        localStorage.setItem("theme", "dark");
    } else {
        rootElement.setAttribute("data-theme", "light");
        themeIcon.classList.remove("bi-brightness-high")
        themeIcon.classList.add("bi-moon-stars")
        demoBtn.classList.remove('bg-gradient')
        localStorage.setItem("theme", "light");
    }
}

toggleSwitch.addEventListener("click", switchTheme, false);
