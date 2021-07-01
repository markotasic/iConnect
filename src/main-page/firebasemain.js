var firebaseConfig = {
  apiKey: 'AIzaSyBruZh1bTFMfDi_Q_fYYD73PiByXs5yax0',
  authDomain: 'iconnect-88fcc.firebaseapp.com',
  projectId: 'iconnect-88fcc',
  storageBucket: 'iconnect-88fcc.appspot.com',
  messagingSenderId: '107244892732',
  appId: '1:107244892732:web:4e52ac34afcdbf40e6c939',
  measurementId: 'G-6JP6297P57',
};

firebase.initializeApp(firebaseConfig);
//______________firebase storage ________________\\

const db = firebase.firestore();

// const btnidk = document.querySelector('.main__addPost');
// btnidk.addEventListener('click', function () {});

const img = document.querySelector('.profile-image-upload');
const profileImg = document.querySelector('.profile-image-pic');
const postlabel = document.querySelector('.post__upload-label');
const postImg = document.querySelector('.post__upload-img');
const postBtn = document.getElementById('post');
const mainPosts = document.getElementById('main-posts');

const nameProfile = document.getElementById('h2').innerHTML;

let randomUid;
let uid;
let username;
let profileImage;

firebase.auth().onAuthStateChanged(function (user) {
  const myUserId = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .doc(`users/${user.uid}`)
    .get()
    .then((qs) => {
      if (qs.empty) {
        console.log(`user doesn't exist`);
        return;
      }
      const userData = qs.data();
      const name = userData.username;

      randomUid = uid;
      uid = user.uid;
      username = name;
      profileImage = user.photoURL;

      const userNameHtml = document.getElementById('h2');
      userNameHtml.innerHTML = name;

      document.getElementById('profile-img').src = user.photoURL;
      document.querySelector('.post__user-name').innerHTML = userData.username;
      document.getElementById('main__content-post').src = user.postURL;

      // CREATE A NEW FIRESTORE COLLECTION CALLED "POSTS"
      let postDocument = db.collection('posts').doc(user.uid);

      postDocument
        .set({
          username: userNameHtml.innerHTML,
        })
        .then(function () {
          console.log('document sucssesfully created');
        })
        .catch(function (err) {
          console.error(err);
        });
    });

  if (!user) return;
  const photoURL = user.photoURL;
  if (photoURL) profileImg.src = photoURL;

  const imgPost = function (e) {
    if (e.target.files && e.target.files.length > 0) {
      const allowedFileTypes = ['image/x-png', 'image/jpeg', 'image/png'];
      const file = e.target.files[0];
      if (allowedFileTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          const imgElement = document.createElement('img');
          if (e.target) {
            imgElement.src = e.target.result;
          }

          imgElement.onload = (e) => {
            if (e.target) {
              const img = e.target;
              const canvas = document.createElement('canvas');
              const maxWidth = 400;

              const scaleSize = maxWidth / img.width;
              canvas.width = maxWidth;
              canvas.height = img.height * scaleSize;

              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                const srcEncoded = ctx.canvas.toDataURL(img.src, 'image/jpeg');
                profileImg.src = srcEncoded;
                uploadUserImg(srcEncoded, user);
              }
            }
          };
        };
      }
    }
  };

  const postURL = user.postURL;
  if (postURL) postImg.src = postURL;

  const postedImage = function (e) {
    if (e.target.files && e.target.files.length > 0) {
      const allowedFileTypes = ['image/x-png', 'image/jpeg', 'image/png'];
      const file = e.target.files[0];
      if (allowedFileTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          const postElement = document.createElement('img');
          if (e.target) {
            postElement.src = e.target.result;
          }

          postElement.onload = (e) => {
            if (e.target) {
              const postlabel = e.target;
              const canvas = document.createElement('canvas');
              const maxWidth = 600;

              const scaleSize = maxWidth / postlabel.width;
              canvas.width = maxWidth;
              canvas.height = postlabel.height * scaleSize;

              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.drawImage(postlabel, 0, 0, canvas.width, canvas.height);

                const srcEncoded = ctx.canvas.toDataURL(
                  postlabel.src,
                  'image/jpeg'
                );
                postImg.src = srcEncoded;
                uploadUserPost(srcEncoded, user);
              }
            }
          };
        };
      }
    }
  };

  postlabel.addEventListener('change', postedImage);
  img.addEventListener('change', imgPost);
});

//______________USER IMAGE UPLOAD________________\\
const uploadUserImg = (img, currentUser) => {
  if (currentUser) {
    const userId = currentUser.uid;
    const uploadTask = firebase
      .storage()
      .ref()
      .child(`userAvatars/${userId}`)
      .putString(img, 'data_url');

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => {
        console.error(err);
        return;
      },
      () => {
        // Get the download URL on upload success
        uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
          try {
            await currentUser.updateProfile({
              photoURL: downloadURL,
            });

            await firebase
              .firestore()
              .doc(`users/${userId}`)
              .update({ img: downloadURL });
          } catch (err) {
            console.error(err);
            return;
          }
        });
      }
    );
  }
};

firebase
  .firestore()
  .collection('posts')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      firebase
        .storage()
        .ref()
        .child(`userAvatars/${doc.data().user.id}`)
        .getDownloadURL()
        .then((url) => {
          const HTMLinner = `
        <div class="main__content">
          <div class="main__content-poster">
            <img
              id="profile-img"
              class="main__content-poster--img"
              src="${url}"
              alt="Profile-pic"
            />
            <div class="main__content-poster--name">${
              doc.data().user.username
            }</div>
          </div>
  
          <img
            class="main__content-post"
            src="${doc.data().postlabel}"
            alt="post"
          />
  
          <div class="textish">
            <a class="main__content-tags">${doc.data().postTags}</a>
            <p class="main__content-text">${doc.data().postText}</p>
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
      `;

          const html = mainPosts.innerHTML;
          mainPosts.innerHTML = HTMLinner + html;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  });

const uploadUserPost = (postlabel, currentUser) => {
  firebase
    .firestore()
    .doc(`users/${uid}`)
    .get()
    .then((qs) => {
      if (qs.empty) {
        console.log(`user doesn't exist`);
        return;
      }
    });

  let postTags;
  let postText;
  let ref;
  let id;

  postBtn.addEventListener('click', function () {
    postTags = document.querySelector('.post__inputs-text--tag').value;
    postText = document.querySelector('.post__inputs-text--msg').value;

    ref = firebase.firestore().collection('posts').doc();
    id = ref.id;
    const userId = firebase.auth().currentUser.uid;

    if (currentUser) {
      const uploadTask = firebase
        .storage()
        .ref()
        .child(`posts/${id}`)
        .putString(postlabel, 'data_url');

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => {
          console.error(err);
          closePostCreateDialog();
          return;
        },
        () => {
          // Get the download URL on upload success
          uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            try {
              await currentUser.updateProfile({
                postURL: downloadURL,
              });

              // CREATE POSTS FIRESTORE DATABASE COLLECTION
              firebase
                .firestore()
                .collection('posts')
                .doc(id)
                .set({
                  postTags: postTags,
                  postText: postText,
                  user: {
                    username: username,
                    id: userId,
                    image: profileImage,
                  },
                  postlabel: downloadURL,
                })
                .then(() => {
                  closePostCreateDialog();
                  // window.location.reload();
                });
            } catch (err) {
              closePostCreateDialog();
              console.error(err);
              return;
            }
          });
        }
      );
    }
  });
};
