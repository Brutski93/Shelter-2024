// burger
const burgerButton = document.querySelector('.burger');
const burgerButtonNew = document.querySelector('.burger-new');
const burgerMenu = document.querySelector('.burger-menu');

const showBurger = (event) => {
  burgerMenu.classList.remove('hiden');
  setTimeout(() => {burgerMenu.style.right = '-20px';}, 10)
}
const hideBurger = (event) => {
  burgerMenu.style.right = '-340px';
  setTimeout(() => {burgerMenu.classList.add('hiden');}, 500);
}

burgerButton.addEventListener('click', showBurger);
burgerButtonNew.addEventListener('click', hideBurger);
// pets slider
const cards = document.querySelectorAll('.card');
const sliderButtons = document.querySelectorAll('.slider-round');
const peremen = document.querySelector('.cards-info');
console.log(peremen.offsetWidth);
let iCards = 0; // размещаем карточки
for (let card of cards) {
  card.style.left = iCards * (270 + peremen.offsetWidth) + 'px';
  iCards++;
}
cards[iCards - 1].classList.toggle('hiden');
cards[iCards - 1].style.left = `-${270 + peremen.offsetWidth}px`;
setTimeout(() => {cards[iCards - 1].classList.toggle('hiden');}, 500); // разместили карточки

const movecard = (event) => {
  let buttontarget = event.target;
  if (buttontarget.tagName !== "BUTTON") return;
  buttontarget.classList.add('slider-round-on');
  if (buttontarget.innerHTML === "←") {
    for (let i = 0; i < iCards; i++) {
      cards[i].style.left = (cards[i].style.left.slice(0, -2) - 270 - peremen.offsetWidth) + 'px';
      if (cards[i].style.left === `-${(270 + peremen.offsetWidth)*2}px`) {
        cards[i].classList.toggle('hiden');
        cards[i].style.left = (iCards - 2) * (270 + peremen.offsetWidth) + 'px';
        setTimeout(() => {cards[i].classList.toggle('hiden');}, 500);
      }
    }
  }
  if (buttontarget.innerHTML === "→") {
    for (let i = 0; i < iCards; i++) {
      cards[i].style.left = (+cards[i].style.left.slice(0, -2) + 270 + peremen.offsetWidth) + 'px';
      if (cards[i].style.left === `${(iCards - 1)*(270 + peremen.offsetWidth)}px`) {
        cards[i].classList.toggle('hiden');
        cards[i].style.left = `-${270 + peremen.offsetWidth}px`;
        setTimeout(() => {cards[i].classList.toggle('hiden');}, 500);
      }
    }
  }
  setTimeout(() => {buttontarget.classList.remove('slider-round-on');}, 200);
}

for (let sliderBut of sliderButtons) {
  sliderBut.addEventListener('click', movecard);
}