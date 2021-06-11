var firebaseConfig = {
  apiKey: 'AIzaSyBruZh1bTFMfDi_Q_fYYD73PiByXs5yax0',
  authDomain: 'iconnect-88fcc.firebaseapp.com',
  projectId: 'iconnect-88fcc',
  storageBucket: 'iconnect-88fcc.appspot.com',
  messagingSenderId: '107244892732',
  appId: '1:107244892732:web:4e52ac34afcdbf40e6c939',
  measurementId: 'G-6JP6297P57',
};

// Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//   apiKey: 'AIzaSyBruZh1bTFMfDi_Q_fYYD73PiByXs5yax0',
//   authDomain: 'iconnect-88fcc.firebaseapp.com',
//   projectId: 'iconnect-88fcc',
// });

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const signupBtn = document.querySelector('#register-btn');

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let emailValue = email.value;
  console.log(emailValue);

  let passwordValue = password.value;
  console.log(passwordValue);

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

  db.collection('users')
    .add({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });

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
