const img = document.getElementById('caruosel');
const rightButton = document.getElementById('rightButton');
const leftButton = document.getElementById('leftButton');



let pictures = [ 
    "./assets/6.jpg",
    "./assets/7.jpg",
    "./assets/8.jpg",
    "./assets/9.jpg",
    "./assets/10.jpg",
    "./assets/11.jpg",
]

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0;
        img.src = pictures[position];
        return ;
    }
    img.src = pictures[position++];
    position++;
}

const moveLeft = () => {
    if (position < 0) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position--];
    position--;
}

rightButton.addEventListener('click', moveRight);
leftButton.addEventListener('click', moveLeft);