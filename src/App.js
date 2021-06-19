const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60c8e11f3722f27da37a9b90';

async function getData() {
  const response = await fetch('https://dummyapi.io/data/api/user?limit=7', {
    headers: {
      'app-id': APP_ID,
    },
  });
  const jsonObject = await response.json();
  for (var i = 0; i < jsonObject.data.length; i++) {
    const usersImage = jsonObject.data[i].picture;

    $(document).ready(function () {
      $('#users-list').append(
        `
        <div class="users__profile">
          <div class="users-status"></div>
          <img
            class="users__profile-img"
            src="${usersImage}"
            alt="img"
          />
        </div>
        `
      );
    });
  }
}
getData();

async function getPosts() {
  const response = await fetch('https://dummyapi.io/data/api/post?limit=1', {
    headers: {
      'app-id': APP_ID,
    },
  });
  const postObject = await response.json();
  for (var i = 0; i < postObject.data.length; i++) {
    const postImg = postObject.data[i].image;
    const firstName = postObject.data[i].owner.firstName;
    const lastName = postObject.data[i].owner.lastName;
    const userImg = postObject.data[i].owner.picture;
    const postText = postObject.data[i].text;
    const tags = postObject.data[i].tags;

    $(document).ready(function () {
      $('#main-posts').append(
        `
        <div class="main__content">
          <div class="main__content-poster">
            <ul id="authors"></ul>
            <img
              id="profile-img"
              class="main__content-poster--img"
              src="${userImg}"
              alt="Profile-pic"
            />
            <div class="main__content-poster--name">${
              firstName + ' ' + lastName
            }</div>
          </div>

          <img
            class="main__content-post"
            src="${postImg}"
            alt="post"
          />

          <div class="textish">
            <a class="main__content-tags">${tags}</a>
            <p class="main__content-text">${postText}</p>
          </div>
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
        </div>
        `
      );
    });
  }
}
getPosts();

const input = document.querySelector('.main__post-add--msg');
const imgAdd = document.querySelector('.main__post-add--img');
const inputCross = document.querySelector('.main__post-btns--cross');
const btnAdd = document.getElementById('post');

input.addEventListener('keydown', function () {
  if (input.value !== '') {
    imgAdd.classList.remove('hidden');
    inputCross.classList.remove('hidden');
    btnAdd.style.marginTop = '5rem';
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
