const closedFlower = document.querySelector('.closed');
const openFlower = document.querySelector('.open');

//Add event listener
closedFlower.addEventListener('click', () => {
    if(openFlower.classList.contains('open')) {
        openFlower.classList.add('active');
        closedFlower.classList.remove ('active');
    }
});

openFlower.addEventListener('click', () => {
    if (closedFlower.classList.contains('closed')) {
        closedFlower.classList.add('active');
        openFlower.classList.remove ('active');
    }
});
