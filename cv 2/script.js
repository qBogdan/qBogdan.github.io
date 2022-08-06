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

// let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.8
// }

// let observer = new IntersectionObserver(cb, options);

// function cb(pages, observer) {
//     pages.forEach(page => {
//         observer.observe(page);
//     })
// }

/* -------------------- */

// fetch('skills.json')
// .then((response) => response.json())
// .then((result) => console.log(result));

fetch('skills.json')
    .then((response) => response.json())
    .then((result) =>
        result.sort((a, b) => b.fav ? 0 : a ? -1 : 1).forEach(skill => {
            let li = document.createElement('li')
            let h2 = document.createElement('h3')
            let skillLvl = document.createElement('div');
            skillLvl.classList.add('skillLvl')

            h2.innerText = skill.name;

            for (let i = 0; i < 10; i++) {
                let div = document.createElement('div');
                div.classList.add('skillPoint');
                skillLvl.append(div)

                if (i < skill.lvl) {
                    div.classList.add('activePoint')
                }
            }

            li.append(h2);
            li.append(skillLvl);

            document.getElementById('skillList').append(li);

        }));
