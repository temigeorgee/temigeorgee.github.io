//NAVBAR
function classToggle() {
  const navs = document.querySelectorAll('.nav-links');

  navs.forEach((nav) => nav.classList.toggle('navbarToggleShow'));
}

document.querySelector('.navbarToggle').addEventListener('click', classToggle);
