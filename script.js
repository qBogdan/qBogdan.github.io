
(function addPointer() {
    const menuButtons = document.querySelectorAll('.menuButtons');
    
    const menuPointer = document.createElement('div');
    menuPointer.id = 'menuPointer';
    menuPointer.style.height = 100 / menuButtons.length + '%';
    
    document.getElementById('menuList').append(menuPointer)

    menuButtons.forEach((button, index) => {
        button.addEventListener('click', ()=> {
            menuPointer.style.top = (100 / menuButtons.length) * index + '%';
        })
    })
})()

// git status
// git add .
// git commit -m "commentary"
// git push
// git pull