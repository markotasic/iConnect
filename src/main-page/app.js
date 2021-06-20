const BASE_URL = 'https://dummyapi.io/data/api';
// const APP_ID = '60ce35fae66f5177d6a55ce1';
// const APP_ID = '60cf05bb8eb6a1677681ff56';
// const APP_ID = '60c8e11f3722f27da37a9b90';
const APP_ID = '60cf64d0355adb3d7ec32341';

//______________GET USERS FROM API________________\\
async function getData() {
  const response = await fetch('https://dummyapi.io/data/api/user?limit=5', {
    headers: {
      'app-id': APP_ID,
    },
  });
  const jsonObject = await response.json();
  for (var i = 0; i < jsonObject.data.length; i++) {
    const usersImage = jsonObject.data[i].picture;
    const firstName = jsonObject.data[i].firstName;
    const lastName = jsonObject.data[i].lastName;

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
          <p class="ree">${firstName + ' ' + lastName}</p>
          </div>
        `
      );
    });
  }
}
getData();

//______________GET POSTS FROM API________________\\
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
            <a class="main__content-tags">#${tags}</a>
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

//______________CUSTOM USER POST ________________\\
const addPost = document.querySelector('.main__addPost');
const showPost = document.querySelector(
  '.dunno-how-it-works-but-i-need-3-divs-for-it'
);
const closePost = document.querySelector('.post__user-clear');
const overlay = document.querySelector('.overlay');

//______________SHOW UPLOAD POST ________________\\
addPost.addEventListener('click', () => {
  showPost.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

//______________HIDE UPLOAD POST ________________\\
closePost.addEventListener('click', () => {
  showPost.classList.add('hidden');
  overlay.classList.add('hidden');
});
