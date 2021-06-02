const darkModeToggle = document.querySelector('.nav__custom-color');
const body = document.querySelector('.body');

darkModeToggle.addEventListener('click', () => {
  body.classList.add('darkmode');
});
