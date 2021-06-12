var firebaseConfig = {
  apiKey: 'AIzaSyBruZh1bTFMfDi_Q_fYYD73PiByXs5yax0',
  authDomain: 'iconnect-88fcc.firebaseapp.com',
  projectId: 'iconnect-88fcc',
  storageBucket: 'iconnect-88fcc.appspot.com',
  messagingSenderId: '107244892732',
  appId: '1:107244892732:web:4e52ac34afcdbf40e6c939',
  measurementId: 'G-6JP6297P57',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const signupBtn = document.querySelector('#register-btn');

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let emailValue = email.value;

  let passwordValue = password.value;

  var db = firebase.firestore();

  // Create a root reference
  /*var storageRef = firebase.storage().ref();

  // Create a reference to 'mountains.jpg'
  var mountainsRef = storageRef.child('user-post.jpg');

  // Create a reference to 'images/mountains.jpg'
  var mountainImagesRef = storageRef.child('');

  // While the file names are the same, the references point to different files
  mountainsRef.name === mountainImagesRef.name; // true
  mountainsRef.fullPath === mountainImagesRef.fullPath; // false*/

  const register = document.querySelector('.register');
  const login = document.querySelector('.login');

  firebase
    .auth()
    .createUserWithEmailAndPassword(emailValue, passwordValue)
    .then((userCredential) => {
      db.collection('users')
        .doc(userCredential.user.uid)
        .set({
          username: username.value,
          email: email.value,
          password: password.value,
        })
        .then((docRef) => {
          register.classList.add('hidden');
          login.classList.remove('hidden');
          // console.log('Document written with ID: ', docRef.id);
          firebase
            .auth()
            .currentUser.sendEmailVerification()
            .then(() => {});
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      document.querySelector('.mail-taken').classList.remove('hidden');
      // ..
    });
});

// ______________________________________LOGIN______________________________________\\
const loginBtn = document.getElementById('login-btn');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

loginBtn.addEventListener('click', function () {
  let emailValue = loginEmail.value;

  let passwordValue = loginPassword.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(emailValue, passwordValue)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // window.location.href = 'index.html';
      // console.log(user.emailVerified);
      console.log(user);
      if (user.emailVerified) {
        window.location.href = 'index.html';
      } else {
        document.querySelector('.mail-confirm').classList.remove('hidden');
      }
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      var errorCode = error.code;
      var errorMessage = error.message;
    });
});

//kako uraditi redirekciju da se ne moze vratiti na login page

/// _____________________________________________ \\\
// const user = firebase.auth().currentUser;

// user.updateProfile({
//   displayName: "Jane Q. User",
//   photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Update successful
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });
