// function corAleatoria() {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     let corRGB = `rgb(${r},${g},${b})`;
//     console.log(corRGB);
// }
// captura dos botões
// botão input e VQV
const getButtonInputBoard = document.getElementById('board-size');
const getButtonVQV = document.getElementById('generate-board');
getButtonVQV.addEventListener('click', () => {
  let N = getButtonInputBoard.value;
  if (N == '') {
    alert('Board Inválido!');
  }
  if (N > 50) {
    N = 50
  }
  if (N < 5) {
    N = 5
  }
  // console.log(N);
});

// botão cor aleatoria
const getButtonCorAleatoria = document.getElementById('button-random-color');
const getTrocaCorClass2 = document.querySelector('.secondColor');
const getTrocaCorClass3 = document.querySelector('.thirdColor');
const getTrocaCorClass4 = document.querySelector('.fourtColor');
getButtonCorAleatoria.addEventListener('click', () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let corRGB = `rgb(${r},${g},${b})`;
  // console.log(corRGB);
  getTrocaCorClass2.style.background = corRGB;
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  corRGB = `rgb(${r},${g},${b})`;
  getTrocaCorClass3.style.background = corRGB;
  // console.log(corRGB);
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  corRGB = `rgb(${r},${g},${b})`;
  getTrocaCorClass4.style.background = corRGB;
  // console.log(corRGB);
});

// Botão apagar
const getButtonLimpar = document.getElementById('clear-board');
const getPixelClass = document.querySelectorAll('.pixel');
const corApagar = 'rgb(255,255,255)'
getButtonLimpar.addEventListener('click', () => {
  for (index = 0; index < getPixelClass.length; index += 1) {
    // if (getPixelClass[index].style.background !== 'rgb(255,255,255)'){
    getPixelClass[index].style.background = corApagar;
    // }
  }
});

// Mudar classe selected
const selecionaFirstColor = document.querySelectorAll('.color')[0];
const selecionaSecondColor = document.querySelectorAll('.color')[1];
const selecionaThirdColor = document.querySelectorAll('.color')[2];
const selecionaFourtColor = document.querySelectorAll('.color')[3];

// console.log(selecionaFirstColor);
// console.log(selecionaSecondColor);
// console.log(selecionaThirdColor);
// console.log(selecionaFourtColor);
// Mudar classe selected
let corSelected = document.querySelectorAll('.color');
selecionaFirstColor.addEventListener('click', () => {
  for (index = 0; index < corSelected.length; index += 1) {
    corSelected[index].classList.remove('selected');
  }
  selecionaFirstColor.classList.add('selected');
});
selecionaSecondColor.addEventListener('click', () => {
  for (index = 0; index < corSelected.length; index += 1) {
    corSelected[index].classList.remove('selected');
  }
  selecionaSecondColor.classList.add('selected');
});
selecionaThirdColor.addEventListener('click', () => {
  for (index = 0; index < corSelected.length; index += 1) {
    corSelected[index].classList.remove('selected');
  }
  selecionaThirdColor.classList.add('selected');
});
selecionaFourtColor.addEventListener('click', () => {
  for (index = 0; index < corSelected.length; index += 1) {
    corSelected[index].classList.remove('selected');
  }
  selecionaFourtColor.classList.add('selected');
});

// pintar quadro
let getPixel = document.querySelector('.pixel');
// console.log(getPixel);
getPixel.addEventListener('click', () => {
  
  const pincel = document.querySelector('.selected');
  console.log(pincel);
  let corDoPincel = pincel.style.backgroundColor;
  console.log(corDoPincel)
  getPixel.style.backgroundColor = corDoPincel;
;
});
