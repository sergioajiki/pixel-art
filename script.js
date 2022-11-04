function corAleatoria() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let corRGB = `rgb(${r},${g},${b})`;
console.log(corRGB)
}
corAleatoria();
// captura dos botões
let buttonInputBoard = document.getElementById('board-size');
let buttonVQV = document.getElementById('generate-board');
let buttonCorAleatoria = document.getElementById('button-random-color');
let buttonLimpar = document.getElementById('clear-board');