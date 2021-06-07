const goToRegister = document.querySelector('.link-to-register');
const goToLogin = document.querySelector('.link-to-login');
const register = document.querySelector('.register');
const login = document.querySelector('.login');

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
