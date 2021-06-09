// const goToRegister = document.querySelector('.link-to-register');
// const goToLogin = document.querySelector('.link-to-login');
// const register = document.querySelector('.register');
// const login = document.querySelector('.login');
const body = document.querySelector('.body');
const darkModeToggle = document.querySelector('.nav__custom-color');
const settingsDarkModeToggle = document.querySelector('.nav__darkmode-toggle');
const navSettings = document.querySelector('.nav__settings');
const navSettingsShow = document.querySelector('.custom-select-hide');

//__________________________LOGIN AND REGISTER PAGE SWITCH__________________________\\
// goToRegister.addEventListener('click', (e) => {
//   e.preventDefault();
//   register.classList.remove('hidden');
//   login.classList.add('hidden');
// });

// goToLogin.addEventListener('click', (e) => {
//   e.preventDefault();
//   register.classList.add('hidden');
//   login.classList.remove('hidden');
// });

navSettings.addEventListener('click', () => {
  navSettingsShow.classList.toggle('hidden');
});

//__________________________DARKMODE TOGGLE__________________________\\
let darkMode2 = localStorage.getItem('darkMode2');

const enableDarkMode2 = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode2', 'enabled');
};

const disableDarkMode2 = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode2', null);
};

if (darkMode2 === 'enabled') {
  enableDarkMode2();
}

// When someone clicks the button
settingsDarkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode2 = localStorage.getItem('darkMode2');

  // if it not current enabled, enable it
  if (darkMode2 !== 'enabled') {
    enableDarkMode2();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode2();
  }
});
//__________________________DARKMODE__________________________\\
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
//__________________________SWIPE RIGHT FOR SIDEBAR__________________________\\
function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  left = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!left || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = left - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/

    if (xDiff > 0) {
      /* left swipe */
    } else {
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }
  /* reset values */
  left = null;
  yDown = null;
}
//__________________________NAV RESPONSIVNES__________________________\\
$(document).ready(function () {
  $('#search-button').click(function () {
    $('#input-2').toggleClass('hidden');
    $('#logo').toggleClass('hidden');
  });
});
