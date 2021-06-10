const submit = document.querySelector('.btn-submit');
const emailInput = document.querySelector('.login__container-mail');
const passwordInput = document.querySelector('.login__container-password');

submit.addEventListener('click', function (e) {
  e.preventDefault();

  // Progres bar dok se loaduje main page

  let emailValue = emailInput.value;
  console.log(emailValue);

  let passwordValue = passwordInput.value;
  console.log(passwordValue);

  firebase
    .auth()
    .signInWithEmailAndPassword(emailValue, passwordValue)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
});

// 1. da li su uneti podaci pravilni
// 2. da li je uneto svako polje || ako nije throw error
// 3. da li je email dobrog formata
// 4. submit
// 5. go to main page
