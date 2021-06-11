$('#register-btn').click(function (e) {
  e.preventDefault(e);
  let nameValue = $('#username').val();
  console.log(nameValue);

  let emailValue = $('#email').val();
  console.log(emailValue);

  let passwordValue = $('#password').val();
  console.log(passwordValue);

  let password2Value = $('#password-2').val();
  console.log(password2Value);

  if (passwordValue === password2Value) {
    $('#password').css('border-color', '#48ff00');
    $('#password-2').css('border-color', '#48ff00');
  } else {
    $('#password').css('border-color', 'red');
    $('#password-2').css('border-color', 'red');
  }

  if (passwordValue === '') {
    $('#password').css('border-color', 'red');
    $('#password-2').css('border-color', 'red');
  }

  if (passwordValue.length > 4 && password2Value.length > 4) {
    $('#password').css('border-color', '#48ff00');
    $('#password-2').css('border-color', '#48ff00');
  } else {
    $('#password').css('border-color', 'red');
    $('#password-2').css('border-color', 'red');
  }

  if (nameValue.length < 6) {
    $('#user-false-msg').removeClass('hidden');
    $('#user-false-msg').addClass('shown');
  } else {
    console.log('false');
  }

  if (emailValue.length < 10) {
    $('#email-false-msg').removeClass('hidden');
    $('#email-false-msg').addClass('shown');
  } else {
    console.log('false');
  }
});
