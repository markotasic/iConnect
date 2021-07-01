$('#register-btn').click(function (e) {
  e.preventDefault(e);
  let nameValue = $('#username').val();

  let emailValue = $('#email').val();

  let passwordValue = $('#password').val();

  let password2Value = $('#password-2').val();

  switch (true) {
    case nameValue.length < 3 && nameValue.length > 0:
      $('#user-false-msg').removeClass('hidden');
      $('#user-input-empty').addClass('hidden');
      break;
    case nameValue.length >= 3 && nameValue.length > 0:
      $('#user-false-msg').addClass('hidden');
      $('#user-input-empty').addClass('hidden');
      break;
    default:
      $('#user-input-empty').removeClass('hidden');
  }

  switch (true) {
    case !emailValue.includes('@') &&
      !emailValue.includes('.com') &&
      emailValue.length > 9:
      $('#email-input-msg').removeClass('hidden');
      $('#email-false-msg').addClass('hidden');
      break;

    case emailValue.includes('@') &&
      emailValue.includes('.com') &&
      emailValue.length >= 10:
      $('#email-input-msg').addClass('hidden');
      $('#email-false-msg').addClass('hidden');
      break;

    default:
      $('#email-false-msg').removeClass('hidden');
  }

  if (passwordValue !== password2Value) {
    $('#password').css('border-color', 'red');
    $('#password-2').css('border-color', 'red');
  } else if (passwordValue.length <= 5) {
    $('#password-input-msg').removeClass('hidden');
  } else {
    $('#password-input-msg').addClass('hidden');
    $('#password').css('border-color', '#48ff00');
    $('#password-2').css('border-color', '#48ff00');
  }
});

// __________Disable back function on Chrome (For Landing Page)_________________//

$(document).ready(function () {
  function disableBack() {
    window.history.forward();
  }

  window.onload = disableBack();
  window.onpageshow = function (evt) {
    if (evt.persisted) disableBack();
  };
});
