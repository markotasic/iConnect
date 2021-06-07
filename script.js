const darkModeToggle = document.querySelector('.nav__custom-color');
const body = document.querySelector('.body');
const goToRegister = document.querySelector('.link-to-register');
const goToLogin = document.querySelector('.link-to-login');
const register = document.querySelector('.register');
const login = document.querySelector('.login');

darkModeToggle.addEventListener('click', () => {
  body.classList.add('darkmode');
});

goToRegister.addEventListener('click', (e) => {
  e.preventDefault();
  register.classList.remove('hidden');
  login.classList.add('hidden');
});

goToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  register.classList.add('hidden');
  login.classList.remove('hidden');
});
