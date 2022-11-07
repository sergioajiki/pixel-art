// function corAleatoria() {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     let corRGB = `rgb(${r},${g},${b})`;
//     console.log(corRGB);
// }
// captura dos botões
// botão input e VQV
window.onload = function () {
  if(localStorage.getItem('colorPalette') === null) {
  let guardaCor1 = document.querySelector('.firstColor').style.backgroundColor;
  console.log(guardaCor1);
  let guardaCor2 = document.querySelector('.secondColor').style.backgroundColor;
  console.log(guardaCor2);
  let guardaCor3 = document.querySelector('.thirdColor').style.backgroundColor;
  console.log(guardaCor3);
  let guardaCor4 = document.querySelector('.fourtColor').style.backgroundColor;  
  console.log(guardaCor4);
}
else {
  const recoveryColor = JSON.parse(localStorage.getItem('colorPalette'));
  const corInicial1 = document.querySelector('.firstColor');
  corInicial1.style.backgroundColor = recoveryColor.guardaCor1;
  
  const corInicial2 = document.querySelector('.secondColor');
  corInicial2.style.backgroundColor = recoveryColor['guardaCor2'];
  
  const corInicial3 = document.querySelector('.thirdColor');
  corInicial3.style.backgroundColor = recoveryColor['guardaCor3'];
  
  const corInicial4 = document.querySelector('.fourtColor');
  corInicial4.style.backgroundColor = recoveryColor['guardaCor4'];
}
}
// let corAnterior = {
//   guardaCor1,
//   guardaCor2,
//   guardaCor3,
//   guardaCor4,
// }
// localStorage.setItem('colorPalette', JSON.stringify(corAnterior));


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
});

// botão cor aleatoria
// let corAnterior = {
//     guardaCor1: 'black',
//     guardaCor2: 'red',
//     guardaCor3: 'green',
//     guardaCor4: 'blue',
//   }

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
  getTrocaCorClass2.style.backgroundColor = corRGB;
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  corRGB = `rgb(${r},${g},${b})`;
  getTrocaCorClass3.style.backgroundColor = corRGB;
  // console.log(corRGB);
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  corRGB = `rgb(${r},${g},${b})`;
  getTrocaCorClass4.style.backgroundColor = corRGB;
  // console.log(corRGB);
// });  

  let guardaCor1 = document.querySelector('.firstColor').style.backgroundColor;
  // console.log(guardaCor1);
  let guardaCor2 = document.querySelector('.secondColor').style.backgroundColor;
  // console.log(guardaCor2);
  let guardaCor3 = document.querySelector('.thirdColor').style.backgroundColor;
  // console.log(guardaCor3);
  let guardaCor4 = document.querySelector('.fourtColor').style.backgroundColor;
  // console.log(guardaCor4);
  let corAnterior = {
    guardaCor1,
    guardaCor2,
    guardaCor3,
    guardaCor4,
  }
  localStorage.setItem('colorPalette', JSON.stringify(corAnterior));
});  

// function corZero() {
  // const recoveryColor = JSON.parse(localStorage.getItem('colorPalette'));
  // const corInicial1 = document.querySelector('.firstColor');
  // corInicial1.style.backgroundColor = recoveryColor['guardaCor1'];
  
  // const corInicial2 = document.querySelector('.secondColor');
  // corInicial2.style.backgroundColor = recoveryColor['guardaCor2'];
  
  // const corInicial3 = document.querySelector('.thirdColor');
  // corInicial3.style.backgroundColor = recoveryColor['guardaCor3'];
  
  // const corInicial4 = document.querySelector('.fourtColor');
  // corInicial4.style.backgroundColor = recoveryColor['guardaCor4'];


  // const corInicial1 = document.querySelector('.firstColor');
  // console.log(recoveryColor['guardaCor1'])
  // if (recoveryColor['guardaCor1'] === null) {
    //   corInicial1.style.backgroundColor = 'black';
    // } else {
      //   corInicial1.style.backgroundColor = recoveryColor['guardaCor1'];
  // }
  // const corInicial2 = document.querySelector('.secondColor');
  // if (recoveryColor['guardaCor2'] === null) {
  //   corInicial2.style.backgroundColor = 'red';
  // } else {
  //   corInicial2.style.backgroundColor = recoveryColor['guardaCor2'];
  // }
  // const corInicial3 = document.querySelector('.thirdColor');
  // if (recoveryColor['guardaCor3'] === '') {
  //   corInicial3.style.backgroundColor = 'green';
  // } else {
  //   corInicial3.style.backgroundColor = recoveryColor['guardaCor3'];
  // }
  // const corInicial4 = document.querySelector('.fourtColor');
  // if (recoveryColor['guardaCor4'] === '') {
  //   corInicial4.style.backgroundColor = 'blue';
  // } else {
  //   corInicial4.style.backgroundColor = recoveryColor['guardaCor4'];
  // }

  // }


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
  // console.log(pincel);
  let corDoPincel = pincel.style.backgroundColor;
  // console.log(corDoPincel)
  getPixel.style.backgroundColor = corDoPincel;
  
});

// manter a cor ao recarregar
