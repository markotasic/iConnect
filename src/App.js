const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60c8e11f3722f27da37a9b90';

const input = document.querySelector('.main__post-add--msg');
const imgAdd = document.querySelector('.main__post-add--img');
const inputCross = document.querySelector('.main__post-btns--cross');
const btnAdd = document.getElementById('post');

input.addEventListener('keydown', function () {
  if (input.value !== '') {
    imgAdd.classList.remove('hidden');
    inputCross.classList.remove('hidden');
    btnAdd.style.marginTop = '3rem';
  } else {
    imgAdd.classList.add('hidden');
    inputCross.classList.add('hidden');
    btnAdd.style.marginTop = '0';
  }
});

inputCross.addEventListener('click', function () {
  input.value = '';
  imgAdd.classList.add('hidden');
  inputCross.classList.add('hidden');
  btnAdd.style.marginTop = '0';
});
