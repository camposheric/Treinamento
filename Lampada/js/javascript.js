const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.includes('lamp2');
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/lamp1.jpeg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/lamp.jpeg';
    }
}

function lampBroken() {
    lamp.src = './img/lamp2.jpeg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
