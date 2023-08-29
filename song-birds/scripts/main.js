import birdsData from './data.js';
import birdsDataEn from './data-en.js';

console.log(`Итого: 270 баллов.

Стартовая страница приложения (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) +20
Страница викторины (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) +30
Страница с результатами (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) +10

у кастомного аудиоплеера из предыдущего пункта есть регулятор громкости звука +30

правильное отображение счета игры +10
текущий вопрос выделяется стилем +10

подстановка дефолтного изображения и замена названия птицы на символы (***), пока игрок не выберет правильный ответ +10
при выборе правильного ответа в блоке с вопросом отображается изображение и название загаданной птицы +10

цветовая индикация правильного/неправильного ответа в виде индикаторов разного цвета рядом с названием птицы: +10
звуковая индикация правильного/неправильного ответа: +30
при выборе правильного или неправильного ответа издаются разные звуковые сигналы: +10
при выборе неправильного ответа проигрывание аудиоплеера не должно останавливаться: +10
при выборе правильно ответа проигрывание аудиоплеера должно остановиться: +10
при клике по названию птицы в блоке с описанием птицы отображается информацию о ней: +10
если правильный ответ уже дан, возможность просматривать описания птиц при клике по вариантам ответов остаётся, цвет индикаторов при этом не изменяется: +10

пока игрок не кликнул по названию птицы из списка, в блоке выводится короткий текст с предложением послушать плеер и выбрать название птицы, чей голос прозвучал +10
при клике по названию птицы из списка, в блоке с описанием птицы появляется актуальная информация о ней +20
Информация о птице включает:
изображение
название (на русском и на латыни)
аудиоплеер с записью голоса
дополнительное описание птицы.
Кнопка перехода к следующему вопросу +30

пока не выбран правильный ответ, кнопка не активна, нет возможности перейти к следующему заданию. Активное и неактивное состояние кнопки визуально отличаются, например, активная кнопка имеет зеленый, не активная - серый цвет +10
после правильного ответа на последний вопрос игрок переходит к странице с результатами викторины +10
страница с результатами содержит количество набранных баллов и кнопку с предложением сыграть ещё раз (или уведомление об окончании игры, если набрано максимальное количество баллов) +10

локализация приложения на два языка, выбранный язык хранится в local storage и сохраняется при перезагрузке +10
создание галереи всех птиц приложения c информацией о них (фото, аудио, название, описание) +10`);
/**  translation  */
let nav1Text;
let nav2Text;

const startTemplate = document.querySelector('.header__nav');
startTemplate.innerHTML = ` <ul class="nav__list">
<li class="nav__item home-item"><button id="home-button" class="icon icon_home" class="nav__button"></button>
</li>
<li class="nav__item"><button id="quiz-button" class="nav__button">${nav1Text}</button></li>
<li class="nav__item"><button id="gallery-button" class="nav__button">${nav2Text}</button></li>
</ul>
<h1 class="header__logo logo"><span>Song</span> <span>Birds</span></h1>
<ul class="lang__list">
  <li class="lang__item"><button id="ru" class="nav__button">Ru</button></li>
  <li class="lang__item"><button id="en" class="nav__button">En</button></li>
</ul>
`;


let currentLanguage;
currentLanguage = localStorage.getItem('game-bird-lang1');
if (currentLanguage != 'en' && currentLanguage != 'ru') {
  currentLanguage = 'en';
}
const en = document.getElementById('en');
const ru = document.getElementById('ru');

en.addEventListener('click', function(){
  currentLanguage = 'en';
  setLocalStorage();
  getTranslate();
});

ru.addEventListener('click', function(){
  currentLanguage = 'ru';
  setLocalStorage();
  getTranslate();
})

function setLocalStorage() {
    localStorage.setItem('game-bird-lang1', currentLanguage);
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('game-bird-lang1')) {
    currentLanguage = localStorage.getItem('game-bird-lang1');
  } 

}
window.addEventListener('load', getLocalStorage)


let nav1TextElement = document.querySelector('#quiz-button');
let nav2TextElement = document.querySelector('#gallery-button');



if (currentLanguage == 'en'){
  nav1TextElement.textContent = 'Quiz';
  nav2TextElement.textContent = 'Gallery';
}

if (currentLanguage == 'ru') {
  nav1TextElement.textContent = 'Викторина';
  nav2TextElement.textContent = 'Галерея';
}





let btn1TextElement;
let btn2TextElement;
let btn3TextElement;
let btn4TextElement;
let btn5TextElement;
let btn6TextElement;

let btn1Text;
let btn2Text;
let btn3Text;
let btn4Text;
let btn5Text;
let btn6Text;







let buttonТext;

let det1;
let det2;


let det1Text;
let det2Text;

function getTranslate(){
  if (currentLanguage === 'ru') {
   

    nav1Text = 'Викторина';
    nav2Text = 'Галерея';


    buttonТext = 'Следующий уровень';

    det1Text = 'Пожалуйста, послушайте плейер';
    det2Text = 'Выберите птицу из списка';

  } 
  if (currentLanguage === 'en') {
    

    nav1Text = 'Quiz';
    nav2Text = 'Gallery';


    buttonТext = 'Next Level';

    det1Text = 'Please, listen to the player';
    det2Text = 'Choose a bird from the list';

  }


  if (nav1TextElement) {
    nav1TextElement.innerHTML = nav1Text;
    nav2TextElement.innerHTML = nav2Text;
  }
  
}

getTranslate();

/* create home template and quiz template */
const homeButton = document.querySelector('.home-item');
const quizButton = document.getElementById('quiz-button');
const galleryButton = document.getElementById('gallery-button');

const header = document.querySelector('.header');
const main = document.querySelector('.main');


const headerQuizTemplateScore = `
<div class="header__score score"><span class="score__text"></span><span class="score__number">0</span></div>
`;

const headerQuizTemplatePagination = `
<ul class="header__pagination pagination container">
  <li class="pagination__item"><button class="pagination__button btn1">${btn1Text}</button></li>
  <li class="pagination__item"><button class="pagination__button btn2">${btn2Text}</button></li>
  <li class="pagination__item"><button class="pagination__button btn3">${btn3Text}</button></li>
  <li class="pagination__item"><button class="pagination__button btn4">${btn4Text}</button></li>
  <li class="pagination__item"><button class="pagination__button btn5">${btn5Text}</button></li>
  <li class="pagination__item"><button class="pagination__button btn6">${btn6Text}</button></li>
</ul>
`;

const homePageTemplate = `
  <div class="about-game container"></div>
  <div class="video-wrapper container">
    <video class="video" autoplay="" muted="" loop="">
      <source src="./assets/video/flying_birds.mov" type="video/mp4">
    </video>
`;

const mainQuizTemplate = `
<div class="main__container container">
  <div class="main__random random card">
    <div class="image__wrapper">
      <img class="random__image image" src="./assets/images/default_bird.jpg">
    </div>
    <div class="random__wrapper">
      <h2 class="random__name">*****</h2>
      <div class="random__audio">
        <button class="audio__button"></button>
        <div class="audio__progress-wrapper">
          <div class="audio__progress"></div>
        </div>
        <div class="audio__time-wrapper">
          <span class="audio__start-time">0:00</span>
          <span class="audio__end-time"></span>
        </div>
      </div>
      <div class="random__volume">
        <div class="volume">
          <span class="volume-icon"></span>
        </div>
        <div class="volume-range">
          <div class="volume-bar"></div>
        </div>
      </div>
    </div>
  </div>
  <ul class="main__list list card">
  </ul>
  <div class="main__details details card">
    <div class="details__info">
      <p class="details__text video-details det1"></p>
      <p class="details__text video-details det2"></p>
    </div>
    <div class="details__video-wrapper">
      <video class="video video-player" autoplay muted loop>
        <source src="./assets/video/flying_birds.mov" type="video/mp4">
      </video>
    </div>
  </div>
  <button class="main__button button hover-effect">${buttonТext}</button>
</div>  
`;

function removeDuplicatedContent(){
  const score = document.querySelector(".score");
  const pagination = document.querySelector(".pagination");
  
  if(pagination && score) {
    score.parentNode.removeChild(score);
    pagination.parentNode.removeChild(pagination);
  }
}

function createHomePageTemplate(){
  main.innerHTML = homePageTemplate;
  
  removeDuplicatedContent();
  let aboutTextElement = document.querySelector('.about-game');

  function aboutTranslate(){
  
  if (aboutTextElement && currentLanguage == 'ru') {
    aboutTextElement.textContent = `Приложение Song Birds поможет Вашему ребенку узнать интересные факты из жизни птиц, научит различать их голоса, 
      познакомит с их внешним видом, и сделает это всё в легкой игровой форме.`
  }
  
  if (aboutTextElement && currentLanguage == 'en') {
  
      aboutTextElement.textContent = `The Song Birds application will help your child learn interesting facts about the life of birds, teach them to distinguish their voices,
      introduce them to their appearance, and do it all in an easy game form.`;
  }
  }
  aboutTranslate();
  
  en.addEventListener('click', aboutTranslate);
  ru.addEventListener('click', aboutTranslate);
  
}

createHomePageTemplate();


let mainButton;

let audioStartTime;
let audioEndTime;
let detailsAudioStartTime;
let detailsAudioEndTime;

let scoreNumber;
let allBirdsListItems;
let hoverEffect;

let volumeIcon;
let volumeRange;
let volumeBar;
let lastVolume = 1;

let detailsVolumeIcon;
let detailsVolumeRange;
let detailsVolumeBar;
let lastDetailsVolume = 1;


function createQuizPageTemplate(){
  attemps = 0;
  activeLevelNumber = 0;
  score = 0;
  currentScore = 0;
  addClass = true;
  randomBirdNumber = findRandomNumber();

  removeDuplicatedContent();

  header.insertAdjacentHTML('beforeend', headerQuizTemplateScore);
  header.insertAdjacentHTML('beforeend', headerQuizTemplatePagination);

  main.innerHTML = mainQuizTemplate;

  det1=document.querySelector('det1');
  det2=document.querySelector('det2');

  let scoreTextElement = document.querySelector('.score__text');
  let btn1TextElement = document.querySelector('.btn1');  
  let btn2TextElement = document.querySelector('.btn2');  
  let btn3TextElement = document.querySelector('.btn3');  
  let btn4TextElement = document.querySelector('.btn4');  
  let btn5TextElement = document.querySelector('.btn5');  
  let btn6TextElement = document.querySelector('.btn6');
  let mainB = document.querySelector('.main__button');

  function changeScoreTranslate(){
  if (scoreTextElement && currentLanguage == 'ru') {
    scoreTextElement.textContent = 'ваши очки: ';
    btn1TextElement.textContent = 'Разминка';
    btn2TextElement.textContent ='Воробьиные';
    btn3TextElement.textContent ='Лесные птицы';
    btn4TextElement.textContent ='Певчие птицы';
    btn5TextElement.textContent ='Хищные птицы';
    btn6TextElement.textContent ='Морские птицы';
    mainB.textContent = 'Следующий уровень';
  }
  
  if (scoreTextElement && currentLanguage == 'en') {
    scoreTextElement.textContent = 'score: ';

    btn1TextElement.textContent = 'Warm-up';
    btn2TextElement.textContent = 'Sparrows';
    btn3TextElement.textContent = 'Forest Birds';
    btn4TextElement.textContent = 'Singing Birds';
    btn5TextElement.textContent = 'Predator Birds';
    btn6TextElement.textContent = 'Sea Birds';
    mainB.textContent = 'Next Level';
  }

  function detTrans(){
    let det1=document.querySelector('.det1');
    let det2=document.querySelector('.det2');
  
    if (currentLanguage == 'ru' && det1){
      det1.textContent = 'Пожалуйста, послушайте плейер';
      det2.textContent = 'Выберите птицу из списка';
    }
  
    if (currentLanguage == 'en' && det1) {
      det1.textContent = 'Please, listen to the player';
      det2.textContent = 'Choose a bird from the list';
    }
    }
  detTrans();
  en.addEventListener('click', detTrans);
  ru.addEventListener('click', detTrans);


  }
  
  changeScoreTranslate();
  
  en.addEventListener('click', changeScoreTranslate);
  ru.addEventListener('click', changeScoreTranslate);
  
  



  createMainBirdsList();
  createAudio();

  chooseRandomBird();

  volumeIcon = document.querySelector('.volume-icon');
  volumeRange = document.querySelector('.volume-range');
  volumeBar = document.querySelector('.volume-bar');


  


  hoverEffect = document.querySelector(".hover-effect");
  mainButton = document.querySelector('.main__button');
  mainButton.addEventListener('click', changeLevel);
  scoreNumber = document.querySelector('.score__number');
  hoverEffect.addEventListener("mousemove", onMouseMove);

  audioStartTime = document.querySelector(".audio__start-time");
  audioEndTime = document.querySelector(".audio__end-time");


  
  
  volumeRange.addEventListener('click', changeVolume);
  volumeIcon.addEventListener('click', toggleMute);

  
}

homeButton.addEventListener('click', createHomePageTemplate);
quizButton.addEventListener('click', setLocalStorage);
quizButton.addEventListener('click', getTranslate);
quizButton.addEventListener('click', createQuizPageTemplate);

/* create audio */
let audioSource;
let audioCurrentTime = 0;
let audioButton;
let isPlay;
let audioProgressWrapper;
let audioProgress;
let audioProgressPercent;
let currentMinutesDuration;
let currentSecondsDuration;
let audioSecondsDuration;

function createAudio(){
  audioButton = document.querySelector('.audio__button');
  isPlay = false;
  audioProgressWrapper = document.querySelector(".audio__progress-wrapper");
  audioProgress = document.querySelector(".audio__progress");

  audioButton.addEventListener('click', playPause);

  function playAudio() {
    audio.src = audioSource;
    audio.currentTime = audioCurrentTime; 
    isPlay = true;
    audio.play();
  }
  
  function pauseAudio() {
    isPlay = false;
  
    audio.pause();
    audioCurrentTime = audio.currentTime;
  }
  
  function playPause(){
    if(!isPlay) {
      playAudio();
    } else {
      pauseAudio();
    }
  }

  function toggleAudioButton() {
    audioButton.classList.toggle('pause');
  }

  function updateAudioProgressBar(event) {
      const { duration, currentTime } = event.srcElement;
      audioProgressPercent = (currentTime / duration) * 100;
      audioProgress.style.width = `${audioProgressPercent}%`;
      const audioMinutesDuration = Math.floor(duration / 60);
      audioSecondsDuration = Math.floor(duration % 60);
      if (audioSecondsDuration < 10) {
        audioSecondsDuration = `0${audioSecondsDuration}`;
      }
      if (audioSecondsDuration) {
        audioEndTime.textContent = `${audioMinutesDuration}:${audioSecondsDuration}`;
      }
      currentMinutesDuration = Math.floor(currentTime / 60);
      currentSecondsDuration = Math.floor(currentTime % 60);
      if (currentSecondsDuration < 10) {
        currentSecondsDuration = `0${currentSecondsDuration}`;
      }
      if (audioSecondsDuration) {
        audioStartTime.textContent = `${currentMinutesDuration}:${currentSecondsDuration}`;
      }
  }

  function setAudioProgress(event){
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const { duration } = audio;
    audio.currentTime = (clickX / width) * duration;
    audioCurrentTime = (clickX / width) * duration;
  }

  audioButton.addEventListener('click', toggleAudioButton);
  audioButton.addEventListener('click', playPause);


  audio.addEventListener('timeupdate', updateAudioProgressBar);

  audioProgressWrapper.addEventListener('click', setAudioProgress);
  audio.addEventListener('ended', function(){
    isPlay = false;
    audioCurrentTime = 0; 
    playPause();
  });
}

/* create details audio */
let detailsAudioSource;
let detailsAudioCurrentTime = 0;
let detailsAudioButton;
let detailsIsPlay;
let detailsAudioProgressWrapper;
let detailsAudioProgress;
let detailsAudioProgressPercent;
let detailsCurrentMinutesDuration;
let detailsCurrentSecondsDuration;
let detailsAudioSecondsDuration;

function createDetailsAudio(){
  detailsAudioButton = document.querySelector('.details__button');
  detailsIsPlay = false;
  detailsAudioProgressWrapper = document.querySelector(".details__progress-wrapper");
  detailsAudioProgress = document.querySelector(".details__progress");

  detailsAudioButton.addEventListener('click', detailsPlayPause);

  function detailsPlayAudio() {
    detailsAudio.src = detailsAudioSource;
    detailsAudio.currentTime = detailsAudioCurrentTime; 
    detailsIsPlay = true;
    detailsAudio.play();
  }
  
  function detailsPauseAudio() {
    detailsIsPlay = false;
  
    detailsAudio.pause();
    detailsAudioCurrentTime = detailsAudio.currentTime;
  }
  
  function detailsPlayPause(){
    if(!detailsIsPlay) {
      detailsPlayAudio();
    } else {
      detailsPauseAudio();
    }
  }

  function detailsToggleAudioButton() {
    detailsAudioButton.classList.toggle('pause');
  }

  function detailsUpdateAudioProgressBar(event) {
      const { duration, currentTime } = event.srcElement;
      detailsAudioProgressPercent = (currentTime / duration) * 100;
      detailsAudioProgress.style.width = `${detailsAudioProgressPercent}%`;
      const detailsAudioMinutesDuration = Math.floor(duration / 60);
      detailsAudioSecondsDuration = Math.floor(duration % 60);
      if (detailsAudioSecondsDuration < 10) {
        detailsAudioSecondsDuration = `0${detailsAudioSecondsDuration}`;
      }
      if (detailsAudioSecondsDuration) {
        detailsAudioEndTime.textContent = `${detailsAudioMinutesDuration}:${detailsAudioSecondsDuration}`;
      }
      detailsCurrentMinutesDuration = Math.floor(currentTime / 60);
      detailsCurrentSecondsDuration = Math.floor(currentTime % 60);
      if (detailsCurrentSecondsDuration < 10) {
        detailsCurrentSecondsDuration = `0${detailsCurrentSecondsDuration}`;
      }
      if (detailsAudioSecondsDuration) {
        detailsAudioStartTime.textContent = `${detailsCurrentMinutesDuration}:${detailsCurrentSecondsDuration}`;
      }
  }

  function detailsSetAudioProgress(event){
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const { duration } = detailsAudio;
    detailsAudio.currentTime = (clickX / width) * duration;
    detailsAudioCurrentTime = (clickX / width) * duration;
  }

  detailsAudioButton.addEventListener('click', detailsToggleAudioButton);
  detailsAudioButton.addEventListener('click', detailsPlayPause);


  detailsAudio.addEventListener('timeupdate', detailsUpdateAudioProgressBar);

  detailsAudioProgressWrapper.addEventListener('click', detailsSetAudioProgress);
  detailsAudio.addEventListener('ended', function(){
    detailsIsPlay = false;
    detailsAudioCurrentTime = 0; 
    detailsPlayPause();
  });
}

// Volume Bar
function changeVolume(e) {
  let volume = e.offsetX / volumeRange.offsetWidth;
  if (volume < 0.1) {
    volume = 0;
  }
  
  if (volume > 0.9) {
    volume = 1;
  }
  volumeBar.style.width = `${volume * 100}%`;
  audio.volume = volume;
  volumeIcon.className = '';
 
  if (volume > 0) {
    volumeIcon.classList.add('volume-icon');
  } else if (volume === 0) {
    volumeIcon.classList.add('volume-mute');
  }
}

function toggleMute() {
  volumeIcon.className = '';
  if (audio.volume) {
    lastVolume = audio.volume;
    audio.volume = 0;
    volumeIcon.classList.add('volume-mute');
    volumeBar.style.width = 0;
  } else {
    audio.volume = lastVolume;
    volumeIcon.classList.add('volume-icon');
    volumeBar.style.width = `${lastVolume * 100}%`;
  }
}


function changeDetailsVolume(e) {
  let detailsVolume = e.offsetX / detailsVolumeRange.offsetWidth;
  if (detailsVolume < 0.1) {
    detailsVolume = 0;
  }
  
  if (detailsVolume > 0.9) {
    detailsVolume = 1;
  }
  detailsVolumeBar.style.width = `${detailsVolume * 100}%`;
  detailsAudio.volume = detailsVolume;
  detailsVolumeIcon.className = '';
 
  if (detailsVolume > 0) {
    detailsVolumeIcon.classList.add('volume-icon');
  } else if (detailsVolume === 0) {
    detailsVolumeIcon.classList.add('volume-mute');
  }
}

function toggleDetailsMute() {
  detailsVolumeIcon.className = '';
  if (detailsAudio.volume) {
    lastDetailsVolume = detailsAudio.volume;
    detailsAudio.volume = 0;
    detailsVolumeIcon.classList.add('volume-mute');
    detailsVolumeBar.style.width = 0;
  } else {
    detailsAudio.volume = lastDetailsVolume;
    detailsVolumeIcon.classList.add('volume-icon');
    detailsVolumeBar.style.width = `${lastVolume * 100}%`;
  }
}

/* create birds list */

let attemps = 0;
let activeLevelNumber = 0;
let isLevelChange = false;
let levels;
let activeLevel;

function createMainBirdsList(){
  levels = document.querySelectorAll('.pagination__button');
  randomImage = document.querySelector(".random__image");
  const mainBirdsList = document.querySelector('.list');

  activeLevel = levels[activeLevelNumber];
  activeLevel.classList.add('active');

  mainBirdsList.innerHTML = ``;
  for(let i = 0; i < levels.length; i++){
    if (currentLanguage === 'ru'){
    mainBirdsList.innerHTML += `
    <li class="list__item" data-id=${i+1}>
      <span class="list__radio"></span>
     
      <span class="list__text">${birdsData[activeLevelNumber][i].name}</span>

    </li>`;
    }
    if (currentLanguage === 'en'){
        mainBirdsList.innerHTML += `
        <li class="list__item" data-id=${i+1}>
          <span class="list__radio"></span>
          <span class="list__text">${birdsDataEn[activeLevelNumber][i].name}</span>
        </li>`;
    }
  }

  function changeBirdsTrans(){
    let allListText = document.querySelectorAll('.list__text')
    if (currentLanguage == 'en' && allListText){
      for(let i = 0; i < levels.length; i++){
       allListText[i].innerHTML = `${birdsDataEn[activeLevelNumber][i].name}`;
      }
    }

    if (currentLanguage == 'ru' && allListText) {
      for(let i = 0; i < levels.length; i++){
        allListText[i].innerHTML = `${birdsData[activeLevelNumber][i].name}`;
       }
    }
  } 
  changeBirdsTrans();
  en.addEventListener('click', changeBirdsTrans);
  ru.addEventListener('click', changeBirdsTrans);

/** translate birds */
let listTextElement
for(let i = 0; i < levels.length; i++){
    listTextElement = document.querySelectorAll('.list__item'); 
    i++;
}
/*****************/

  allBirdsListItems = document.querySelectorAll('.list__item');
  allBirdsListItems.forEach(el => el.addEventListener('click', chooseBird));
}

let audio = new Audio();
let detailsAudio = new Audio();
let audioPlay = new Audio()
let addClass = true;

function findRandomNumber(){
  return Math.floor(Math.random() * 5);
}

let randomBirdNumber;
let randomName;
let randomImage;
let id;
let radio;

function chooseBird(event){
  randomName = document.querySelector('.random__name');
  randomImage = document.querySelector('.random__image');

  id = event.currentTarget.getAttribute("data-id");
  radio = event.target.closest('.list__item').querySelector('.list__radio');
  if (randomBirdNumber === id - 1){
    
    if (!radio.classList.contains('right') && addClass === true ) {
      radio.classList.add('right');
      attemps++;
      audioPlay.src = './assets/sounds/success.mp3';
      addClass = false;
      calculateScore();
      updateScore();
      isPlay = false;
      audioPlay.play();
      audio.pause();
      randomName.dataset.id = id-1;
      let randomDataId=randomName.dataset.id

      function changeRandomNameLanguage(){
        if(currentLanguage == 'ru') {
          randomName.innerText = birdsData[activeLevelNumber][randomDataId].name;
        }
       if (currentLanguage == 'en') {
         randomName.innerText = birdsDataEn[activeLevelNumber][randomDataId].name;
        }
      }
    
      changeRandomNameLanguage();
    
       en.addEventListener('click', changeRandomNameLanguage);
       ru.addEventListener('click', changeRandomNameLanguage);

    }

  

    randomImage.src = `${birdsData[activeLevelNumber][id - 1].image}`;
    mainButton.classList.add('pulse');
    isLevelChange = true;

} else {

    if (!radio.classList.contains('wrong') && addClass === true) {
      radio.classList.add('wrong');
      attemps++;
      audioPlay.src = './assets/sounds/alert.mp3';
      audioPlay.play();

    }

  }

  createBirdsDetailsTemplate(id);
}

function createBirdsDetailsTemplate(id){
  const details = document.querySelector('.details');
  

  details.innerHTML = `
  <div class = "wrapper">
  <div class="image__wrapper">
    <img class="details__image image" src="${birdsData[activeLevelNumber][id - 1].image}">
  </div>
  <div class="details__wrapper">
    <h3 class="details__name">${birdsData[activeLevelNumber][id - 1].name}</h3>
    <span class="details__translation">${birdsData[activeLevelNumber][id - 1].species}</span>
    <div class="details__audio audio">
    <button class="details__button"></button>
    <div class="details__progress-wrapper">
      <div class="details__progress"></div>
    </div>
    <div class="details__time-wrapper">
      <span class="details__start-time">0:00</span>
      <span class="details__end-time"></span>
    </div>
  </div>
  <div class="random__volume">
    <div class="details__volume">
      <span class="details__volume-icon"></span>
    </div>
    <div class="details__volume-range">
      <div class="details__volume-bar"></div>
    </div>
  </div>
    </div>
  </div>
  <div class="details__text">${birdsData[activeLevelNumber][id - 1].description}</div>
  </div>`;

  function translateDetails(){
    let detName = document.querySelector('.details__name');
    let detDesc = document.querySelector('.details__text');
    if (currentLanguage == 'ru'){
      detName.innerHTML = `${birdsData[activeLevelNumber][id - 1].name}`;
      detDesc.innerHTML = `${birdsData[activeLevelNumber][id - 1].description}`;
    }
    if (currentLanguage == 'en'){
      detName.innerHTML = `${birdsDataEn[activeLevelNumber][id - 1].name}`;
      detDesc.innerHTML = `${birdsDataEn[activeLevelNumber][id - 1].description}`;
    }
  }

  translateDetails();
  en.addEventListener('click', translateDetails);
  ru.addEventListener('click', translateDetails);


  detailsAudioStartTime = document.querySelector(".details__start-time");
  detailsAudioEndTime = document.querySelector(".details__end-time");

  detailsVolumeIcon = document.querySelector('.details__volume-icon');
  detailsVolumeRange = document.querySelector('.details__volume-range');
  detailsVolumeBar = document.querySelector('.details__volume-bar');
  detailsVolumeRange.addEventListener('click', changeDetailsVolume);
  detailsVolumeIcon.addEventListener('click', toggleDetailsMute);

  
  createDetailsAudio();





  detailsAudioCurrentTime = 0;
  detailsAudio.currentTime = detailsAudioCurrentTime;
  
  detailsAudioSource = `${birdsData[activeLevelNumber][id - 1].audio}`;
  detailsAudio.src = detailsAudioSource;
  
    detailsIsPlay = false;
  
    detailsAudioProgressPercent = 0
    detailsAudioProgress.style.width = `${detailsAudioProgressPercent}%`;
    detailsAudioButton.className = 'details__button';
  
    detailsCurrentMinutesDuration = '0';
    detailsCurrentSecondsDuration = '00'
    if (detailsAudioSecondsDuration) {
      detailsAudioStartTime.textContent = `${detailsCurrentMinutesDuration}:${detailsCurrentSecondsDuration}`;
    }
  
    detailsAudio.addEventListener('loadedmetadata', function() {
      const detailsAudioMinutesDuration = Math.floor(detailsAudio.duration / 60);
      let detailsAudioSecondsDuration = Math.floor(detailsAudio.duration % 60);
      if (detailsAudioSecondsDuration < 10) {
        detailsAudioSecondsDuration = `0${detailsAudioSecondsDuration}`;
      }
      if (detailsAudioSecondsDuration) {
        detailsAudioEndTime.textContent = `${detailsAudioMinutesDuration}:${detailsAudioSecondsDuration}`;
      }
    });




}




function chooseRandomBird(){
  randomBirdNumber = findRandomNumber();



audioCurrentTime = 0;
audio.currentTime = audioCurrentTime;


  audioSource = birdsData[activeLevelNumber][randomBirdNumber].audio;
  audio.src = audioSource;

  isPlay = false;

  audioProgressPercent = 0
  audioProgress.style.width = `${audioProgressPercent}%`;
  audioButton.className = 'audio__button';

  currentMinutesDuration = '0';
  currentSecondsDuration = '00'
  if (audioSecondsDuration) {
    audioStartTime.textContent = `${currentMinutesDuration}:${currentSecondsDuration}`;
  }





  




























  audio.addEventListener('loadedmetadata', function() {
    const audioMinutesDuration = Math.floor(audio.duration / 60);
    let audioSecondsDuration = Math.floor(audio.duration % 60);
    if (audioSecondsDuration < 10) {
      audioSecondsDuration = `0${audioSecondsDuration}`;
    }
    if (audioSecondsDuration) {
      audioEndTime.textContent = `${audioMinutesDuration}:${audioSecondsDuration}`;
    }
  });
}

/* calculate score */
let score = 0;
let currentScore = 0;

function calculateScore(){
  if (attemps === 1) {
    currentScore = 5;
  }

  if (attemps === 2) {
    currentScore = 4;
  }

  if (attemps === 3) {
    currentScore = 3;
  } 
  
  if (attemps === 4) {
    currentScore = 2;
  } 
  
  if (attemps === 5) {
    currentScore = 1;
  } 
  
  if (attemps === 6) {
    currentScore = 0;
  }
  attemps = 0;
  score += currentScore;
  currentScore = 0;
}

function updateScore(){
  scoreNumber.innerHTML = score;
}

function changeLevel(){
  if (activeLevelNumber < levels.length - 1 && isLevelChange === true) {
    audioCurrentTime = 0;
    audio.currentTime = audioCurrentTime;
    levels.forEach(el => el.classList.remove('active'));
    activeLevelNumber++;
    activeLevel = levels[activeLevelNumber];
    activeLevel.classList.add('active');
    chooseRandomBird();
    createMainBirdsList();
    randomName.innerText = "*****";
    randomImage.src="./assets/images/default_bird.jpg";
    isLevelChange = false;
    addClass = true;
    mainButton.classList.remove('pulse');


    const detalsInfo = document.querySelector('.main__details');
    detalsInfo.innerHTML = `
    <div class="main__details details card">
    <div class="details__info">
      <p class="details__text video-details det1"></p>
      <p class="details__text video-details det2"></p>
    </div>
    <div class="details__video-wrapper">
      <video class="video video-player" autoplay muted loop>
        <source src="./assets/video/flying_birds.mov" type="video/mp4">
      </video>
    </div>
    </div>`;

    function detTrans(){
  let det1=document.querySelector('.det1');
  let det2=document.querySelector('.det2');

  if (currentLanguage == 'ru' && det1){
    det1.textContent = 'Пожалуйста, послушайте плейер';
    det2.textContent = 'Выберите птицу из списка';
  }

  if (currentLanguage == 'en' && det1) {
    det1.textContent = 'Please, listen to the player';
    det2.textContent = 'Choose a bird from the list';
  }
  }
detTrans();
en.addEventListener('click', detTrans);
ru.addEventListener('click', detTrans);



  } else if (activeLevelNumber === levels.length - 1) {
    showResults();
  }
}

function showResults(){
  isPlay = false;
  audio.pause();

  main.innerHTML = `
  <div class="main__details details card myvideo-wrapper">
  <div class="details__info">
    <p class="details__text video-details"><p class="score__final">Вы набрали ${score} из 30 баллов</p>
    <button class="button score__button">играть</button></p>
  </div>
  <div class="details__video-wrapper myvideo">
    <video class="video video-player" autoplay muted loop>
      <source src="./assets/video/flying_birds.mov" type="video/mp4">
    </video>
  </div>
</div>`;

let scoreFinal = document.querySelector('.score__final');
const scoreButton = document.querySelector(".score__button");

function changeScoreTrans() {
if (currentLanguage == 'ru' && scoreFinal){
  scoreFinal.innerHTML = `Вы набрали ${score} из 30 баллов`;
  scoreButton.textContent = 'играть';
}

if (currentLanguage == 'en' && scoreFinal){
  scoreFinal.innerHTML = `Your result is ${score} of 30`;
  scoreButton.textContent = 'play';
}
}
changeScoreTrans()
en.addEventListener('click', changeScoreTrans);
ru.addEventListener('click', changeScoreTrans)


  scoreButton.addEventListener("click", createQuizPageTemplate);
}

/**create hover effect */

function onMouseMove(event) {
  // get cursor coordinates to container (the link itself).
  const { x, y } = hoverEffect.getBoundingClientRect();

  // get relative coordinates.
  const relativeX = event.clientX - x;
  const relativeY = event.clientY - y;

  // apply coordinates values to CSS variables.
  hoverEffect.style.setProperty("--x-cursor-position", relativeX);
  hoverEffect.style.setProperty("--y-cursor-position", relativeY);
}


/* create gallery */
let mainGallery;
let galleryAudioSource;
let galleryAudio = new Audio();
let galleryIsPlay = false;

function galleryPlayAudio() {
  galleryAudio.src = galleryAudioSource;
 // galleryAudio.currentTime = galleryAudioCurrentTime; 
  galleryIsPlay = true;
  galleryAudio.play();
}

function galleryPauseAudio() {
  galleryIsPlay = false;

  galleryAudio.pause();

}

function galleryPlayPause(){
  if(!galleryIsPlay) {
    galleryPlayAudio();
  } else {
    galleryPauseAudio();
  }
}


function createGalleryPageTemplate(){
  main.innerHTML = "";
  let mainGallery = document.createElement('div');
  mainGallery.classList.add('gallery');
  mainGallery.classList.add('container');

  main.append(mainGallery);
  
  
  function translateGallery(){
    mainGallery.innerHTML = '';
    for(let i = 0; i < 6; i++){
      for(let j = 0; j < 6; j++){
        if(currentLanguage == 'ru'){
      mainGallery.innerHTML += `
      <li class="list__item gallery__item card">
        <div class="gallery__image image__wrapper"><img class="image" src="${birdsData[i][j].image}"></div>
        <div class="gallery__items-wrapper">
        <div class="gallery__name-wrapper">
        <span class="gallery__name">${birdsData[i][j].name}</span>
        <button class="audio__button gallery__button" data-i=${i} data-j=${j}></button>
        </div> 
        <span class="gallery__species">${birdsData[i][j].species}</span>
        <span class="gallery__description">${birdsData[i][j].description}</span>    
      </li>`;
        }
  
        if(currentLanguage == 'en'){
          mainGallery.innerHTML += `
          <li class="list__item gallery__item card">
            <div class="gallery__image image__wrapper"><img class="image" src="${birdsData[i][j].image}"></div>
            <div class="gallery__items-wrapper">
            <div class="gallery__name-wrapper">
            <span class="gallery__name">${birdsDataEn[i][j].name}</span>
            <button class="audio__button gallery__button" data-i=${i} data-j=${j}></button>
            </div> 
            <span class="gallery__species">${birdsData[i][j].species}</span>
            <span class="gallery__description">${birdsDataEn[i][j].description}</span>    
          </li>`;
            }
  
      }
    };
  }
  translateGallery()
  en.addEventListener('click', translateGallery);
  ru.addEventListener('click', translateGallery);

  removeDuplicatedContent();
  mainGallery.addEventListener('click', playGalleryAudio);

}

function playGalleryAudio(event){

  if (event.target.classList.contains("gallery__button")){
    let i = event.target.dataset.i;
    let j = event.target.dataset.j;
    galleryAudioSource = `${birdsData[i][j].audio}`;
    galleryAudio.src = galleryAudioSource;
    galleryPlayPause();
    event.target.classList.toggle('pause');


  }
}

galleryButton.addEventListener('click', createGalleryPageTemplate);
galleryButton.addEventListener('click', setLocalStorage);
galleryButton.addEventListener('click', getTranslate);