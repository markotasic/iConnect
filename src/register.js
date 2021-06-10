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

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const signupBtn = document.querySelector('#register-btn');

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let emailValue = email.value;
  console.log(emailValue);

  let passwordValue = password.value;
  console.log(passwordValue);

  firebase
    .auth()
    .createUserWithEmailAndPassword(emailValue, passwordValue)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
});
