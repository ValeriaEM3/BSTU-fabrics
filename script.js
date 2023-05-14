const trikos = {
    Lien: [
      './assets/Lien/Фото1.png',
      './assets/Lien/Фото2.png',
      './assets/Lien/Фото3.png',
      './assets/Lien/Фото4.png',
      './assets/Lien/Фото5.png',
      './assets/Lien/Фото6.png',
      './assets/Lien/Фото7.png',
      './assets/Lien/Фото8.png',
      './assets/Lien/Фото9.png',
      './assets/Lien/Фото10.png',
      './assets/Lien/Фото11.png',
      './assets/Lien/Фото12.png',
      './assets/Lien/Фото13.png',
      './assets/Lien/Фото14.png',
      './assets/Lien/Фото15.png',
      './assets/Lien/Фото16.png',
      './assets/Lien/Фото17.png',
      './assets/Lien/Фото18.png'
    ],
    Cotton: [
    './assets/Cotton/Фото1.png',
    './assets/Cotton/Фото2.png',
    './assets/Cotton/Фото3.png',
    './assets/Cotton/Фото4.png',
    './assets/Cotton/Фото5.png',
    './assets/Cotton/Фото6.png',
    './assets/Cotton/Фото7.png',
    './assets/Cotton/Фото8.png',
    './assets/Cotton/Фото9.png',
    './assets/Cotton/Фото10.png',
    './assets/Cotton/Фото11.png',
    './assets/Cotton/Фото12.png',
    './assets/Cotton/Фото13.png',
    './assets/Cotton/Фото14.png',
    './assets/Cotton/Фото15.png',
    './assets/Cotton/Фото16.png',
    './assets/Cotton/Фото17.png',
    './assets/Cotton/Фото18.png'
  ],
    Lapsha: [
      './assets/Lapsha/Фото1.png',
      './assets/Lapsha/Фото2.png',
      './assets/Lapsha/Фото3.png',
      './assets/Lapsha/Фото4.png',
      './assets/Lapsha/Фото5.png',
      './assets/Lapsha/Фото6.png',
      './assets/Lapsha/Фото7.png',
      './assets/Lapsha/Фото8.png',
      './assets/Lapsha/Фото9.png',
      './assets/Lapsha/Фото10.png',
      './assets/Lapsha/Фото11.png',
      './assets/Lapsha/Фото12.png',
      './assets/Lapsha/Фото13.png',
      './assets/Lapsha/Фото14.png',
      './assets/Lapsha/Фото15.png',
      './assets/Lapsha/Фото16.png',
      './assets/Lapsha/Фото17.png',
      './assets/Lapsha/Фото18.png'
      
    ],
    Futer: [
      './assets/Futer/Фото1.png',
      './assets/Futer/Фото2.png',
      './assets/Futer/Фото3.png',
      './assets/Futer/Фото4.png',
      './assets/Futer/Фото5.png',
      './assets/Futer/Фото6.png',
      './assets/Futer/Фото7.png',
      './assets/Futer/Фото8.png',
      './assets/Futer/Фото9.png',
      './assets/Futer/Фото10.png',
      './assets/Futer/Фото11.png',
      './assets/Futer/Фото12.png',
      './assets/Futer/Фото13.png',
      './assets/Futer/Фото14.png',
      './assets/Futer/Фото15.png',
      './assets/Futer/Фото16.png',
      './assets/Futer/Фото17.png',
      './assets/Futer/Фото18.png'
    ],
  }
  
  
  function changeImage (event, triko) {
    // const parent =  event.currentTarget;
    //const triko = parent.querySelector('.triko__block').dataset.triko;
    const trikoImages = document.querySelectorAll('.choose_tkani__block > img');
    Array.from(trikoImages).forEach((image, index) => image.src = trikos[triko][index]);
    //Array.from(trikoImages).forEach((image, index) => image.src = './assets/' + triko + '/Фото' + (index + 1) + '.png');
    
    const buttons = document.querySelector('.triko__blok__row').children;
    Array.from(buttons).forEach(button => {
      if (button.dataset.triko == triko) {
        button.classList.add('triko__block__aktive');
      } else {
        button.classList.remove('triko__block__aktive');
      };
    });
    
  };
  
  function buttonClick (event) {
    console.log(event.currentTarget);
    const triko = event.currentTarget.dataset.triko;
    changeImage (event, triko);
  };

  let triko = 'Lien';
  const trikoImages = document.querySelectorAll('.choose_tkani__block > img');
  console.log(trikoImages);
  console.log(trikos);

  function redrawPhoto(arr) {    
    const trikoImages = document.querySelectorAll('.choose_tkani__block > img');
    Array.from(trikoImages).forEach((image, index) => image.src = trikos[triko][index]);
    //arr.forEach((image, index) => image.src = trikos[triko][index]);
  }
  
  document.querySelector('#Lien').addEventListener('click', buttonClick);
  document.querySelector('#Cotton').addEventListener('click', buttonClick);
  document.querySelector('#Lapsha').addEventListener('click', buttonClick);
  document.querySelector('#Futer').addEventListener('click', buttonClick);

  //slider
  const imagesLeft = Array.from(document.querySelector('.slider_left').children);
  const imagesCenter = Array.from(document.querySelector('.slider_center').children);
  const imagesRight = Array.from(document.querySelector('.slider_right').children);

  function shiftPhoto(arrow) {
    if(window.innerWidth>768){
      const w=6;
      if (arrow == 'left') {
        trikos[triko] = trikos[triko].slice(w).concat(trikos[triko].slice(0, w));
      } else if (arrow == 'right') {
        trikos[triko] = trikos[triko].slice(-w).concat(trikos[triko].slice(0, -w));
      }
    }
    else if(window.innerWidth<=320){
      const w=1;
      if (arrow == 'left') {
        trikos[triko] = trikos[triko].slice(w).concat(trikos[triko].slice(0, w));
      } else if (arrow == 'right') {
        trikos[triko] = trikos[triko].slice(-w).concat(trikos[triko].slice(0, -w));
      }
    }
    else{
      const w=4;
      if (arrow == 'left') {
        trikos[triko] = trikos[triko].slice(w).concat(trikos[triko].slice(0, w));
      } else if (arrow == 'right') {
        trikos[triko] = trikos[triko].slice(-w).concat(trikos[triko].slice(0, -w));
      }
    }
    //const w = window.innerWidth >= 768 ? 6 : 3;
   
  }

  const slider = document.querySelector('.slider');

  const buttonLeft = document.querySelector('.button_slider_left');
  const buttonRight = document.querySelector('.button_slider_right');
  
  function sliderLeft() {
    redrawPhoto(imagesRight);
    buttonLeft.removeEventListener('click', sliderRight);
    buttonRight.removeEventListener('click', sliderLeft);
    slider.classList.add('move_left');
    shiftPhoto('left');
  };

  function sliderRight() {
    redrawPhoto(imagesLeft);
    buttonLeft.removeEventListener('click', sliderRight);
    buttonRight.removeEventListener('click', sliderLeft);
    slider.classList.add('move_right');
    shiftPhoto('right');
  };

  slider.addEventListener('animationend', () => {
    redrawPhoto(imagesCenter);
    slider.classList.remove('move_left');
    slider.classList.remove('move_right');
    buttonLeft.addEventListener('click', sliderRight);
    buttonRight.addEventListener('click', sliderLeft);
  });

  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);