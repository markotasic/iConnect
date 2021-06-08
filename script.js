// const goToRegister = document.querySelector('.link-to-register');
// const goToLogin = document.querySelector('.link-to-login');
// const register = document.querySelector('.register');
// const login = document.querySelector('.login');
const body = document.querySelector('.body');
const darkMode = document.querySelector('.nav__custom-color');

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

darkMode.addEventListener('click', () => {
  body.classList.toggle('darkmode');
});
// _____________SWIPE RIGHT FOR SIDEBAR__________________________
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
