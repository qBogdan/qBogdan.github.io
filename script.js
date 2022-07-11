
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

console.error('help');
console.warn('warn');
console.debug('debug');
console.info('info');
console.log('log');

const firstName = 'Bogdan';
let age = 29;
age = 22;

console.log(age);

// git status
// git add .
// git commit -m "commentary"
// git push
// git pull