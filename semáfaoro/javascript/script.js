const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const trafficlight = (event) =>{
   stopAutomatic();
   turnOn[event.target.id]();
}

const nexIndex = () =>{
    if (colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0;
    }
}

const stopAutomatic = () =>{
   clearInterval(intervalId);
}

const changecolor = () =>{
   const colors = ['red','yellow','green']
   const color = colors [ colorIndex ];
   turnOn [color]();
   nexIndex ();
}
const turnOn = {
   'red':    () => img.src = './img/vermelho.png',
   'yellow': () => img.src = './img/amarelo.png',
   'green':  () => img.src = './img/verde.png',
   'automatic': () => intervalId = setInterval(changecolor, 1000),
}

buttons.addEventListener('click', trafficlight );