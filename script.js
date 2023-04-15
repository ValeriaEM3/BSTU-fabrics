const triko = {
    Лён: [
      'https://damion.club/uploads/posts/2022-02/1645031929_36-damion-club-p-krasivie-zimnie-kartinki-priroda-40.jpg',
      'https://gagaru.club/uploads/posts/2023-02/1676708280_gagaru-club-p-zimnie-peizazhi-krasivie-kartini-krasivo-6.jpg',
      'https://proprikol.ru/wp-content/uploads/2019/12/krasivye-kartinki-pro-zimu-62.jpg'
    ],
    Хлопок: [
      'https://mirpozitiva.ru/wp-content/uploads/2019/11/1478782975_ptichka_sakura.jpg',
      'https://uprostim.com/wp-content/uploads/2021/04/image034-4.jpg',
      'https://vsegda-pomnim.com/uploads/posts/2022-04/1649130823_61-vsegda-pomnim-com-p-krasivaya-vesennyaya-priroda-foto-71.jpg'
    ],
    Лапша: [
      'https://mobimg.b-cdn.net/v3/fetch/16/16410d56242cdd30d6c20c26d0740e26.jpeg',
      'https://vsegda-pomnim.com/uploads/posts/2022-04/1649118807_9-vsegda-pomnim-com-p-krasivie-peizazhi-prirodi-leto-foto-9.jpg',
      'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-39.jpg'
    ],
    Футер: [
      'https://klike.net/uploads/posts/2022-08/1661232461_j-51.jpg',
      'https://w-dog.ru/wallpapers/9/9/514842286559747/priroda-les-park-derevya-listya-krasochnye-doroga-osen-padenie-cveta-progulka.jpg',
      'https://w-dog.ru/wallpapers/10/12/470823373396813/osen-rechka-bereg-berezy-listya-zheltye.jpg'
    ],
  }
  
  
  function changeImage (event) {
    const triko = event.target.dataset.triko;
    const trikoImages = document.querySelector('.photo__image').children;
    Array.from(trikoImages).forEach((image, index) => image.src = triko[triko][index]);
    // Array.from(seasonImages).forEach((image, index) => image.src = './assets/jpg/' + season + '/' + (index + 1) + '.jpg');
    
    const buttons = document.querySelector('.photo__buttons').children;
    Array.from(buttons).forEach(button => {
      if (button.dataset.triko == triko) {
        button.classList.add('button_color');
      } else {
        button.classList.remove('button_color');
      };
    });
    
  };
  
  function buttonClick (event) {
    if (event.target.classList.contains('button')) {
      changeImage (event);
    };
  };
  
  document.querySelector('.photo__buttons').addEventListener('click', buttonClick);