const buttons = document.querySelectorAll('.button');
const body = document.body;
buttons.forEach((button) => {
    button.addEventListener('click', (e) => bgChange(e.target.id));
})

function bgChange(bgcolor) {
    body.style.backgroundColor = bgcolor;
}