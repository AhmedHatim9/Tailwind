const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
    darkBtn.classList.toggle("hidden");
    lightBtn.classList.toggle("hidden");
}

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        lightBtn.classList.add("hidden");
        return;
    }
    lightBtn.classList.add("hidden");
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

lightBtn.addEventListener("click", () =>{
    themeSwitch();
});

darkBtn.addEventListener("click", () =>{
    themeSwitch();
});

themeCheck();