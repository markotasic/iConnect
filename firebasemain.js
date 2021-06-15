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

const img = document.querySelector('.profile-image-upload');
const profileImg = document.querySelector('.profile-image-pic');

firebase.auth().onAuthStateChanged(function (user) {
  if (!user) return;
  const photoURL = user.photoURL;
  if (photoURL) profileImg.src = photoURL;
  img.addEventListener('change', function (e) {
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
  });
});

const uploadUserImg = (img, currentUser) => {
  console.log(currentUser);
  if (currentUser) {
    const userId = currentUser.uid;
    var uploadTask = firebase
      .storage()
      .ref()
      .child(`userAvatars/${userId}`)
      .putString(img, 'data_url');

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        var progress = Math.round(
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
            console.log(currentUser);
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
