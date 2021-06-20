const body = document.querySelector('.body');
const darkModeToggle = document.querySelector('.nav__custom-color');
const settingsDarkModeToggle = document.querySelector('.nav__darkmode-toggle');
const navSettings = document.querySelector('.nav__settings');
const navSettingsShow = document.querySelector('.custom-select-hide');
const sidebar = document.querySelector('.sidebar');

//__________________________LOGIN AND REGISTER PAGE SWITCH__________________________\\

navSettings.addEventListener('click', () => {
  navSettingsShow.classList.toggle('hidden');
});

//__________________________DARKMODE__________________________\\

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  // 3. Update darkMode variable
  darkMode = 'enabled';
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', null);
  // 3. Update darkMode variable
  darkMode = null;
};

if (darkMode === 'enabled') enableDarkMode();

settingsDarkModeToggle.addEventListener('click', () => {
  if (darkMode !== 'enabled') enableDarkMode();
  else disableDarkMode();
});

darkModeToggle.addEventListener('click', () => {
  if (darkMode !== 'enabled') enableDarkMode();
  else disableDarkMode();
});
//__________________________SWIPE RIGHT FOR SIDEBAR__________________________\\

// sidebar.style.transition = 'left 0.3s';
// const maxLeft = sidebar.clientWidth - 20;
// let isSidebarHidden = true;

// sidebar.addEventListener('mousedown', () => {
//   if (isSidebarHidden) {
//     sidebar.style.left = 0;
//     isSidebarHidden = false;
//   }
// });

// document.addEventListener('mousedown', (e) => {
//   let pass = true;

//   if (e.target === sidebar) pass = false;

//   for (const child of sidebar.children) {
//     if (e.target === child) pass = false;
//     for (const secondChild of child.children) {
//       if (e.target === secondChild) pass = false;

//       for (const thirdChild of secondChild.children) {
//         if (e.target === thirdChild) pass = false;
//       }
//     }
//   }

//   if (pass) {
//     if (!isSidebarHidden) {
//       sidebar.style.left = `-${maxLeft}px`;
//       isSidebarHidden = true;
//     }
//   }
// });

//__________________________NAV RESPONSIVNES__________________________\\

$(document).ready(function () {
  $('#search-button').click(function () {
    $('#input-2').toggleClass('hidden');
    $('#logo').toggleClass('hidden');
  });
});

//__________________________Disable back function (For Signup Page)__________________________\\

$(document).ready(function () {
  function disableBack() {
    window.history.forward();
  }

  window.onload = disableBack();
  window.onpageshow = function (evt) {
    if (evt.persisted) disableBack();
  };
});
