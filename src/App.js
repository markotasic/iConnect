const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60c8e11f3722f27da37a9b90';

fetch(`${BASE_URL}/post?limit=3`, {
  headers: {
    'app-id': APP_ID,
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data.data))
  .catch((err) => console.error(err));

$(document).ready(function () {
  $('#post-2').before(` 
  <div class="main__content">
    <div class="main__content-poster">
      <img
        class="main__content-poster--img"
        src="img/user.png"
        alt="Profile-pic"
      />
      <div class="main__content-poster--name">Marko Tasic</div>
    </div>
  
    <img
      class="main__content-post"
      src="img/user-post.jpg"
      alt="post"
    />
    <div class="main__content-react">
      <div class="like">
        <svg class="main__content-react--like">
          <use xlink:href="img/sprite.svg#icon-thumb_up"></use>
        </svg>
        <p class="main__content-react--text">Like</p>
      </div>
      <div class="comment">
        <svg class="main__content-react--comment">
          <use xlink:href="img/sprite.svg#icon-forum"></use>
        </svg>
        <p class="main__content-react--text">Comment</p>
      </div>
    </div>
  </div>`);
});

// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
// ///////////////////////////////////////////////
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
