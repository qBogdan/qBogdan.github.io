const menuButtons = document.querySelectorAll('.liButton');
const menuIcons = document.querySelectorAll('.icon');
const pages = document.querySelectorAll('.page');

menuButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        menuIcons.forEach(icon => icon.style.height = "1rem");
        menuIcons[index].style.height = "100%";
        pages[index].scrollIntoView({ behavior: "smooth" });
    })
});
