const menuButtons = document.querySelectorAll('.liButton');
const menuIcons = document.querySelectorAll('.icon');
const pages = document.querySelectorAll('.page');

menuButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        pages[index].scrollIntoView({ behavior: "smooth" });
    })
});

window.addEventListener('scroll', (e) => {
    pages.forEach((page, index) => {
        if (page.getBoundingClientRect().y > -800 && page.getBoundingClientRect().y < 200) {
            menuIcons.forEach(icon => icon.style.height = "1rem");
            menuIcons[index].style.height = "100%";
        }
    })
})