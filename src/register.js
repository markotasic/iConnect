// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyBruZh1bTFMfDi_Q_fYYD73PiByXs5yax0',
  authDomain: 'iconnect-88fcc.firebaseapp.com',
  projectId: 'iconnect-88fcc',
  storageBucket: 'iconnect-88fcc.appspot.com',
  messagingSenderId: '107244892732',
  appId: '1:107244892732:web:4e52ac34afcdbf40e6c939',
  measurementId: 'G-6JP6297P57',
};

firebase.initializeApp({
  apiKey: 'AIzaSyBruZh1bTFMfDi_Q_fYYD73PiByXs5yax0',
  authDomain: 'iconnect-88fcc.firebaseapp.com',
  projectId: 'iconnect-88fcc',
});

// var db = firebase.firestore();

firebase.initializeApp(firebaseConfig);

// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     console.log(user);
//   } else {
//     // No user is signed in.
//   }
// });

const registerUsernameInput = document.querySelector(
  '.register__container-username'
);

const registerEmailInput = document.querySelector('.register__container-mail');

const registerPasswordInput = document.querySelector(
  '.register__container-password'
);

const registerPasswordInput2 = document.querySelector(
  '.register__container-password-2'
);

const submitRegister = document.querySelector('.submit-register');

submitRegister.addEventListener('click', function (e) {
  e.preventDefault();

  let usernameRegisterValue = registerUsernameInput.value;
  console.log(usernameRegisterValue);

  let emailRegisterValue = registerEmailInput.value;
  console.log(emailRegisterValue);

  //napravi provere za passwords

  const newUser = {
    username: usernameRegisterValue,
    email: emailRegisterValue,
  };

  let passwordRegisterValue = registerPasswordInput.value;
  console.log(passwordRegisterValue);

  let passwordRegisterValue2 = registerPasswordInput2.value;
  console.log(passwordRegisterValue2);

  firebase
    .auth()
    .createUserWithEmailAndPassword(emailRegisterValue, passwordRegisterValue)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      firebase.firestore().collection('users').doc(user.uid).set(newUser);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
});
