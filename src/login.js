$('#register-btn').click(function (e) {
  e.preventDefault(e);
  let nameValue = $('#username').val();

  let emailValue = $('#email').val();

  let passwordValue = $('#password').val();

  let password2Value = $('#password-2').val();

  if (
    passwordValue === password2Value &&
    passwordValue.length >= 4 &&
    password2Value.length >= 4
  ) {
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

  if (nameValue.length <= 3) {
    $('#user-false-msg').removeClass('hidden');
    $('#user-false-msg').addClass('shown');
  } else {
    $('#user-false-msg').removeClass('shown');
    $('#user-false-msg').addClass('hidden');
  }

  if (emailValue.length < 10) {
    $('#email-false-msg').removeClass('hidden');
    $('#email-false-msg').addClass('shown');
  }

  if (!emailValue.includes('@')) {
    $('#email-false-msg').removeClass('hidden');
    $('#email-false-msg').addClass('shown');
  } else {
    $('#email-false-msg').removeClass('shown');
    $('#email-false-msg').addClass('hidden');
  }

  if (!emailValue.includes('.com')) {
    $('#email-false-msg').removeClass('hidden');
    $('#email-false-msg').addClass('shown');
  } else {
    $('#email-false-msg').removeClass('shown');
    $('#email-false-msg').addClass('hidden');
  }
});
