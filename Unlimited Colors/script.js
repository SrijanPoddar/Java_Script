const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

const changeColor = () => {
    document.body.style.backgroundColor = randomColor();
};

const StartchangeColor = () => {
    if (!intervalId) {
        intervalId = setInterval(changeColor, 1000);
    }
};

const StopchangeColor = () => {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', StartchangeColor);
document.querySelector('#stop').addEventListener('click', StopchangeColor);
