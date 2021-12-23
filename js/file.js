function showCloseMenu() {
  const menuSection = document.querySelector('#mobile-nav');
  const nav = document.querySelector('#desktop-nav');
  const headerName = document.querySelector('#logo');
  const itemsContainer = document.querySelector('#items-container-menu');

  menuSection.classList.toggle('d-none');
  nav.classList.toggle('d-none');
  headerName.classList.toggle('d-none');
  headerName.classList.toggle('d-flex-center');
  itemsContainer.classList.toggle('d-none');
  itemsContainer.classList.toggle('d-flex');
}

const hamburgerBtn = document.querySelector('.menu-bars');
const closeBtn = document.querySelector('#header-close-menu');
hamburgerBtn.addEventListener('click', showCloseMenu);
closeBtn.addEventListener('click', showCloseMenu);
